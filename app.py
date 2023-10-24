from flask import Flask, render_template
import data

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run()