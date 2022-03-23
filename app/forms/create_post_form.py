from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Length

class PostForm(FlaskForm):
    user_id = IntegerField('user_id')
    image_url = StringField('Image', validators=[DataRequired(message='Image cannot be blank')])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=1, max=100, message='Description cannot be blank and it cannot be longer than 100 characters')])
