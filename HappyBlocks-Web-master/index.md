---
layout: default
diapo:
  - image: img/Diapo/01.jpg
    text: Bienvenue sur le prototype de HappyBlocks Web 2.0
    subtext: "Le futur de lendemain du jour suivant... demain !"
    button:
        text: "En savoir plus"
        link: "https://www.youtube.com/watch?v=7q50z0s7MOs"
        icon: "arrow-right-bold-hexagon-outline"

  - image: img/Diapo/02.jpg
    text: Il **supporte** le _markdown_ pour mettre en page
    subtext: C'est assez ~~improtant~~ important

  - image: img/Diapo/03.jpg

  - image: img/Diapo/04.jpg
    text: On est pas obligé de mettre de sous-titre ou de titre

  - image: img/Diapo/05.jpg
    text: Ajouter des photos est simple comme bonjour

  - image: img/Diapo/09.jpg

games:
  - image: img/Placeholder.jpg
    text: Placeholder
    subtext: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    badge: Nouveau !
    link: "#!"

  - image: img/Placeholder.jpg
    text: Placeholder
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non odio quis arcu maximus aliquam.
    link: "#!"

  - image: img/Placeholder.jpg
    text: Placeholder
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget turpis dictum, auctor neque eu.
    link: "#!"

  - image: img/Placeholder.jpg
    text: Placeholder
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend rutrum laoreet. Morbi ac sagittis.
    badge: Bientôt disponible
    url: https://www.youtube.com/watch?v=ZMeg69665yU
    progress: 21%

  - image: img/Placeholder.jpg
    text: Sinon ça vas ?
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan, purus sed efficitur sodales, purus.
    link: "#!"

  - image: img/Placeholder.jpg
    text: Placeholder
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ex odio. Morbi aliquet sem.
    link: "#!"

features:
  - icon: bell
    text: Lorem ipsum dolor.
    subtext: Beaucoup de cloches

  - icon: cake
    text: Lorem ipsum dolor.
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices nec dolor eget rhoncus. Duis.

  - icon: cat
    text: Lorem ipsum dolor.
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac metus sit amet leo interdum.

  - icon: gender-transgender
    text: Lorem ipsum dolor.
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus orci ipsum, a eleifend lectus.

  - icon: car
    text: Lorem ipsum dolor.
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus magna nec velit luctus, eget.

  - icon: emoticon-poop
    text: Lorem ipsum dolor.
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ornare nisl. Vivamus tempus mi.

  - icon: voice
    text: Lorem ipsum dolor.
    subtext: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis lorem, vestibulum ac nisi nec.
---

{% include diapo.html content=page.diapo %}

{% capture scrollContent %}
##

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis est elit, ac finibus augue viverra quis. Nullam lacinia justo at enim venenatis, vitae fuck you valentin suscipit arcu porta. Aliquam at aliquam orci. Raviolli raviolli, don't lewd the dragon loli! Proin in ultrices risus, sit amet venenatis orci. Nullam ac faucibus libero. Pellentesque quis molestie velit. Aliquam tincidunt varius.

## A propos de HappyBlocks

*HappyBlocks* est un serveur mini-jeux pour le jeu Minecraft, où vous pouvez vous divertir avec d'autres personnes en jouant à divers Mini-jeux.

Nous avons 2 147 483 647 jeux pour tous les types de joueurs, vous êtes sûrs d'y trouver ce que vous cherchez.
Et comme vous pouvez jouer avec d'autres personnes, ou avec vos amis, vous n'êtes jamais vraiment seul, la convivialité est garentie !

Mais bien sûr, il existe des jeux qui peuvent êtres joués seuls, donc vous avez toujours la possibilité de amuser sur HappyBlocks.

## Mini-jeux disponibles

{% include games.html content=page.games %}

## Pourquoi HappyBlocks ?

{% include features.html content=page.features %}
{% endcapture %}

{% include darkBlock.html content=scrollContent %}
