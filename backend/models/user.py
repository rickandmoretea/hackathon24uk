from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    age = db.Column(db.Integer)
    gender = db.Column(db.String(50))
    weight = db.Column(db.Float)
    height = db.Column(db.Float)

    def __repr__(self):
        return '<User {}>'.format(self.name)