var launcher = document.getElementById('launcher');

function addbutton() {
    var button = document.createElement('div');
    button.className = 'component button-component draggable drag-drop';
    launcher.appendChild(button);
}

interact('.draggable')
    .draggable({
        snap: {
            targets: [
                interact.createSnapGrid({x: 5, y: 5})
            ],
            range: Infinity,
            relativePoints: [{x: 0, y: 0}]
        },
        autoScroll: true,

        onmove: dragMoveListener
    }).resizable({
        edges: {left: true, right: true, bottom: true, top: true}
    })
    .on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    });

function dragMoveListener(event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

interact('.dropzone').dropzone
({
    overlap: 0.75,

    ondrop: function (event) {
        launcher.removeChild(event.relatedTarget);
    }
});