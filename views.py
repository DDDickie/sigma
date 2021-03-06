from __future__ import with_statement
from contextlib import closing
import sqlite3
from flask import Flask,request,session,g,redirect,url_for,abort,render_template

DATEBASE = '/tmp/sigma.db'
DEBUG = True
SECRET_KEY = 'development key'
USERNAME ='admin'
PASSWORD = '123456'
login_status='login_out'   

app = Flask(__name__)
app.config.from_object(__name__)

def connect_db():
		return sqlite3.connect(app.config['DATEBASE'])

def init_db():
 	with  closing(connect_db ()) as db: 
 		with app.open_resource('schema.sql') as f:
			db.cursor().executescript(f.read())
		db.commit()

@app.before_request
def before_request():
		g.db = connect_db()

@app.after_request
def after_request(response):
	g.db.close()
	return response 

@app.route('/')
def index():
	login_status='login_out'
	start="first"
	return render_template('sigma.html',login_status=login_status,start=start)

@app.route('/add', methods = ['POST'])
def	add_entry():
#	if not session.get('logged_in'):
#		absort(401)
	xuehao = request.form['studentid'] 
	cur = g.db.execute('select studentid from entries')
	if str(xuehao) in str(cur.fetchall()):
		return render_template('recruit.html')	
	g.db.execute('insert into entries (name,studentid,sex,specialty,basic,phone,email,others) values (?,?,?,?,?,?,?,?)',[request.form['name'],xuehao,request.form['sex'],request.form['specialty'],request.form['basic'],request.form['phone'],request.form['email'],request.form['others']])
	g.db.commit()
	return render_template('sigma.html',login_status=login_status)

@app.route('/login', methods = ['GET','POST'])
def	login():  
	if request.method == 'POST':
 		if request.form['username'] != app.config['USERNAME']:
			login_status = 'login_mistake'
		elif request.form['password'] != app.config['PASSWORD']:
			login_status = 'login_mistake'
		else:
			login_status='login_in' 
			session['logged_in']=True
	return render_template("sigma.html",login_status=login_status)

@app.route('/logout')
def logout():
	session.pop('logged_in',None)
	login_status='login_out'
	return redirect(url_for('sigma')) 

@app.route('/recruit.html')
def recruit():
	return render_template('recruit.html',login_status=login_status)

@app.route('/download.html')
def download():
	return render_template('download.html',login_status=login_status)

@app.route('/achievement.html')
def outsource():
	return render_template('achievement.html',login_status=login_status)

@app.route('/sigma.html')
def sigma():
	return render_template('sigma.html',login_status=login_status)

@app.route('/show.html')
def show():
	cur = g.db.execute('select studentid from entries') 
	entries = [dict(studentid=row[0]) for row in cur.fetchall()]
	return render_template( 'show.html',entries= entries)

@app.route('/show_entries.html',methods=['GET'])
def show_entries():
	_id = request.args.get("id")
	cur = g.db.execute('select name,sex,specialty,basic, phone,email,others from entries where studentid = "' + _id  + '"')
	entries = [dict(name=row[0],sex=row[1],specialty=row[2],basic=row[3],phone=row[4],email=row[5],others=row[6]) for row in cur.fetchall()]
	return render_template('show_entries.html',entries=entries)

if __name__ ==  '__main__':
 	init_db()   
	app.debug=True
	app.run()
