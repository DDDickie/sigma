from flask import * 
app = Flask(__name__)
@app.route('/')
def index():
	title=request.args.get("title","")
 	return render_template('sigma.html',title=title)

if __name__=='__main__':
	app.debug=True
	app.run()
