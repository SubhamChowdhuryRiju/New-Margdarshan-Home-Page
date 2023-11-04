from flask import Flask, url_for, render_template, request, redirect, session
import data
import sqlite3
import os
import bcrypt
import webbrowser

app = Flask(__name__)
app.config['SECRET_KEY'] = 'MARGDARSHAN'

# SQLite database setup
db_name = 'database.db'
db_path = os.path.join(os.getcwd(), db_name)

def create_table():
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

create_table()

@app.route('/')
def home():
    return render_template('index.html', 
            roadmap_data = data.roadmap_data, 
            blog_data = data.blog_data,
            predictor_data = data.predictor_data,
            study_material_data = data.study_material_data,
            test_series_data = data.test_series_data)

@app.route('/blog')
def blog():
    return render_template('blog2.html', blog_data = data.blog_data)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['email']
        password = request.form['password']

        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username = ?", (username,))
        user = cursor.fetchone()

        if user:
            cursor = conn.cursor()
            cursor.execute("SELECT password FROM users WHERE username = ?", (username,))
            user_pass = cursor.fetchone()
            conn.close()
            if bcrypt.checkpw(password.encode('utf-8'), user_pass[0]):
                session['username'] = username
                # flash('Login successful', 'success')
                # Define the alert message
                alert_message = "Login Successfull."

                # Open the current web page with the alert message
                webbrowser.open(f"javascript:alert('{alert_message}')")
                return '<h1>Login Successfull.</h1>'
            else:
                # flash('Invalid username or password', 'danger')
                return '<h1>Invalid</h1>'

    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    # flash('Logged out successfully', 'success')
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['email']
        password = request.form['password']

        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username = ?", (username,))
        existing_user = cursor.fetchone()

        if existing_user:
            # flash('Username already exists', 'danger')
            return '<h1>User Already Exists</h1>'
        else:
            cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, 
                        bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())))
            conn.commit()
            # flash('Registration successful', 'success')
            return redirect(url_for('login'))

        conn.close()

    return render_template('sign_up.html')

if __name__ == '__main__':
    app.run()