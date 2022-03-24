from app.models import db, Post
from datetime import datetime


def seed_posts():
    post1 = Post(
        user_id=1,
        image_url="https://s.yimg.com/uu/api/res/1.2/J2zY35gBDkHJ0rli3GpEwQ--~B/Zmk9ZmlsbDtoPTQyMjt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-02/86e15720-9295-11ec-bf7f-e39fe064b30c.cf.jpg",
        description="Love this game!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post2 = Post(
        user_id=1,
        image_url="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/Elden_Ring_Tip1.png",
        description="Love this game!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post3 = Post(
        user_id=2,
        image_url="https://ca-times.brightspotcdn.com/dims4/default/550f4c0/2147483647/strip/true/crop/1920x1080+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fb0%2F4124c717492dbc6850af0a6e80d2%2Flegends-arceus-screenshot-24.jpg",
        description="Love this game!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post4 = Post(
        user_id=2,
        image_url="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_legends_arceus/pokemon-legends-arceus-169.jpg",
        description="Love this game!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post5 = Post(
        user_id=3,
        image_url="https://images.nintendolife.com/20994d34a4cbf/legend-of-zelda-ocarina-of-time-3d.large.jpg",
        description="Love this game!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post6 = Post(
        user_id=3,
        image_url="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Ocarina-of-Time-3D-Link-Riding-Through-Valley-Art.jpg",
        description="Love this game!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post7 = Post(
        user_id=1,
        image_url="https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
        description="What a amazing game!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post8 = Post(
        user_id=1,
        image_url="https://www.denofgeek.com/wp-content/uploads/2021/03/Zelda-and-Link.jpg?resize=768%2C432",
        description="Woah! This game is amazing!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post9 = Post(
        user_id=1,
        image_url="https://i.insider.com/560ebbe7dd0895325c8b458e?width=1000&format=jpeg&auto=webp",
        description="Classic!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post10 = Post(
        user_id=1,
        image_url="https://cdn.vox-cdn.com/thumbor/zKSCVtByQRdfQH4ASjHrXzrY4TY=/0x0:2560x1440/1200x800/filters:focal(1076x516:1484x924)/cdn.vox-cdn.com/uploads/chorus_image/image/69480489/msedge_ZDHAPTUK8C.0.jpg",
        description="Classic!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post11 = Post(
        user_id=1,
        image_url="https://i.pcmag.com/imagery/reviews/04M2XRdHQ4KfR0UMht5GsSA-1..v1586784180.jpg",
        description="Not a bad remake at all!",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post12 = Post(
        user_id=1,
        image_url="https://cdn.vox-cdn.com/thumbor/Br1xLejNkFGjpRCCACCtsw3zTb4=/0x0:1640x1144/1200x675/filters:focal(400x433:662x695)/cdn.vox-cdn.com/uploads/chorus_image/image/66662889/ply_cloudff_grading.0.jpg",
        description="These graphics are hilarious",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)
    db.session.add(post11)
    db.session.add(post12)

    db.session.commit()


def undo_posts():
    db.session.execute("TRUNCATE posts RESTART IDENTITY CASCADE;")
    db.session.commit()
