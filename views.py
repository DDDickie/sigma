from __future__ import with_statement
from contextlib import closing
import sqlite3
from flask import Flask,request,session,g,redirect,url_for,abort,render_template

DATEBASE = '/tmp/sigma.db'
DEBUG = True
SECRET_KEY = 'development key'
USERNAME ='admin'
PASSWORD = '123456'

app = Flask(__name__)
app.config.from_object(__name__)

def connect_db():
		return sqlite3.connect(app.config['DATEBASE'])

def init_db():
 	with closing(connect_db ()) as db: 
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
	return render_template('sigma.html')

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
	return render_template('sigma.html')

@app.route('/login', methods = ['GET','POST'])
def	login():
 	error =None
	if request.method == 'POST':
 		if request.form['username'] != app.config['USERNAME']:
			error = 'Invalid username'
		elif request.form['password'] != app.config['PASSWORD']:
			error = 'Invalid password'
		else:
			session['logged_in']=True
	return render_template("sigma.html")

@app.route('/logout')
def logout():
	session.pop('logged_in',None)
	return redirect(url_for('sigma')) 

@app.route('/recruit.html')
def recruit():
	return render_template('recruit.html')

@app.route('/download.html')
def download():
	return render_template('download.html')

@app.route('/outsource.html')
def outsource():
	return render_template('outsource.html')

if __name__ ==  '__main__':
 	init_db()   
	app.debug=True
	app.run()
