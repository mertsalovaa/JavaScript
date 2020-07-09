class Figure {
    constructor(tag = 'div') {
        this.element = document.createElement(tag);
        this.element.style.margin = '10px';
    }
    append() {
        document.body.append(this.element);
    }
    hide() {
        this.element.style.opacity = '0';
    }
    show() {
        this.element.style.opacity = '1';
    }
}

class Square extends Figure {
    constructor(side = 120, color = 'gray', tag) {
        super(tag);
        this.side = side;
        this.color = color;
    }

    create() {
        this.element.style.backgroundColor = this.color;
        this.element.style.height = this.element.style.width = this.side + 'px';
        this.append();
        return this;
    }
}

class Circle extends Square {
    constructor(borderRadius, side, color, tag) {
        super(side, color, tag);
        this.borderRadius = borderRadius;
    }
    create() {
        this.element.style.backgroundColor = this.color;
        this.element.style.height = this.element.style.width = this.side + 'px';
        this.element.style.borderRadius = this.borderRadius + '%';
        this.append();

        return this;
    }
}

let square = new Square(100, 'darkRed').create();
let square2 = new Square(150, 'darkGreen').create();
let square3 = new Square().create();

let circle = new Circle(50, 100, 'pink').create();

circle.element.addEventListener('mouseover', () => {
    circle.hide();
});
circle.element.addEventListener('mouseout', () => {
    circle.show();
});

square2.element.addEventListener('click', ()=> {
square2.element.style.background = 'olive';
});