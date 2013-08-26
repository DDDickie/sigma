<<<<<<< HEAD
from flask import * 
app = Flask(__name__)
@app.route('/')
def index():
	title=request.args.get("title","")
 	return render_template('sigma.html',title=title)

if __name__=='__main__':
=======
from __future__ import with_statement
from contextlib import closing
import sqlite3
from flask import Flask,request,session,g,redirect,url_for,abort,render_template,flash

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
	with closing(connect_db()) as db:
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

@app.route('/zhaoxin')
def zhaoxin():
	return render_template('zhaoxin.html')

@app.route('/add', methods = ['POST'])
def	add_entry():
#	if not session.get('logged_in'):
#		absort(401)
	g.db.execute('insert into entries (name,xuehao,sex,class,base,phone,email,others) values (?,?,?,?,?,?,?,?)',[request.form['name'],request.form['xuehao'],request.form['sex'],request.form['class'],request.form['base'],request.form['phone'],request.form['email'],request.form['others']])
	g.db.commit()
	flash('NEW entry was successfully posted')
	return redirect(url_for('zhaoxin'))

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
			flash('You were logged in')
			return redirect(url_for('sigma'))
	return render_template('login.html',error=error)

@app.route('/logout')
def logout():
	session.pop('logged_in',None)
	flash('You were logged out')
	return redirect(url_for('sigma'))

if __name__ ==  '__main__':
<<<<<<< HEAD
	init_db() 
=======
	init_db()
>>>>>>> 5ab5422cf7afe0698fa067ddd512e03ed64788a2
>>>>>>> fe73272af40a7594aff905caddbb67cc50d3f665
	app.debug=True
	app.run()
