from tokenize import String
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class CommentForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    post_id = IntegerField('post_id', validators=[DataRequired()])
    comment = StringField('comment', validators=[DataRequired(message='Please enter a comment'), Length(max=100, message='Comment cannot be more than 100 characters')])
