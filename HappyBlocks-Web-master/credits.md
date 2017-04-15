---
layout: default
title: Crédits
permalink: /Credits/

team:
  - name: Le filtre anti-hentai
    desc: Ce bot fut construit par @StoneSet après l'attaque terroriste menée par @pizzacus
    link: "#!"
    image: img/Credits/anti-hentai.png
    button:
      - icon: skype
        url: "#!"
        background: "#00AFF0"
      - icon: facebook
        url: "#!"
        background: "#3b5998"

  - name: Cette photo normale de Mario
    desc: Directement extraite de mario maker, rien n'a été modifié, RIEN
    link: "#!"
    image: img/Credits/saieok.png
    button:
      - icon: twitter
        url: "#!"
        background: "#00aced"
      - icon: youtube-play
        url: "#!"
        background: "#e52d27"

  - name: Jeff Kaplan
    desc: Au cas ou vous vous demanderiez pourquoi ils ont buffé bastion...
    link: "#!"
    image: img/Credits/jaff.jpg
    button:
      - icon: twitter
        url: "#!"
        background: "#00aced"
      - icon: youtube-play
        url: "#!"
        background: "#e52d27"
---

# Team HappyBlocks

{% include team.html content=page.team %}

{% capture scrollContent %}
HappyBlocks utilise les technologies suivantes:

Police: [Ubuntu](http://font.ubuntu.com/) (Utilisée un peu partout et sur les versiones récentes du logo)

Plugin serveur Minecraft:
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)
 * [Plugin](#!)

Technologies utilisées sur le site web:
 * [Jekyll](http://jekyllrb.com)
 * [Meterial Design Icons](http://materialdesignicons.com)
 * [clipboard.js](https://clipboardjs.com/)
{% endcapture %}

{% include darkBlock.html content=scrollContent %}
