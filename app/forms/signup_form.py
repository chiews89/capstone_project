from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, EqualTo, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(message='Username cannot be blank'), Length(min=3, max=20, message='Username must be more than 3 characters and less than 20 characters'), username_exists])
    email = StringField('email', validators=[DataRequired(message='Email cannot be blank'),Length(min=3, max=30, message='Email must be more than 3 characters and less than 30 characters'), Email(message='Please enter a valid email'), user_exists])
    password = StringField('password', validators=[DataRequired(message='Password cannot be blank'), Length(min=3, max=30, message='Password must be more than 3 characters and less than 20 characters')])
    repeat_password = StringField('repeat_password', validators=[DataRequired(message='Confirm password cannot be blank'), EqualTo('password', message='Passwords must match')])
