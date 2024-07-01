document.addEventListener('DOMContentLoaded', () => {
    const flexboxContainer = document.getElementById('flexboxContainer');

    document.getElementById('reset-flexbox').addEventListener('click', () => {
        flexboxContainer.style.flexDirection = '';
        flexboxContainer.style.justifyContent = '';
        flexboxContainer.style.alignItems = '';
        flexboxContainer.style.gap = '';
    });

    document.getElementById('gap-value').addEventListener('input', (e) => {
        flexboxContainer.style.gap = `${e.target.value}px`;
    });

    document.getElementById('flex-row').addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'row';
    });

    document.getElementById('flex-column').addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'column';
    });

    document.getElementById('start').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-start';
    });

    document.getElementById('center').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'center';
    });

    document.getElementById('end').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-end';
    });

    document.getElementById('space-around').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-around';
    });

    document.getElementById('space-between').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-between';
    });

    document.getElementById('space-evenly').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-evenly';
    });

    document.getElementById('align-start').addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-start';
    });

    document.getElementById('align-center').addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'center';
    });

    document.getElementById('align-end').addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-end';
    });

    const boxes = ['box1', 'box2', 'box3'];
    
    document.getElementById('reset-flex-grow').addEventListener('click', () => {
        boxes.forEach(boxId => {
            document.getElementById(boxId).style.flexGrow = 0;
            document.getElementById(`grow-${boxId}`).value = 0;
        });
    });

    document.getElementById('grow-all').addEventListener('click', () => {
        boxes.forEach(boxId => {
            document.getElementById(boxId).style.flexGrow = 1;
            document.getElementById(`grow-${boxId}`).value = 1;
        });
    });

    boxes.forEach(boxId => {
        document.getElementById(`grow-${boxId}`).addEventListener('input', (e) => {
            document.getElementById(boxId).style.flexGrow = e.target.value;
        });
    });
});
