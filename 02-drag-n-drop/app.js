const item = document.querySelector('.item')
const row = document.querySelector('.placeholder').closest('.row');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.className = 'item endDrag'
}

row.addEventListener('dragover',dragover)
row.addEventListener('dragenter',dragenter)
row.addEventListener('dragleave',dragleave)
row.addEventListener('drop',dragdrop)

function dragover(event) {
    const placeholder = event.target.closest('.placeholder')

    return placeholder ? event.preventDefault() : null
}

function dragenter(event) {
    const placeholder = event.target.closest('.placeholder')

    return placeholder ? event.target.classList.add('hovered') : null
}

function dragleave(event) {
    const placeholder = event.target.closest('.placeholder')

    return placeholder ? event.target.classList.remove('hovered') : null
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}
