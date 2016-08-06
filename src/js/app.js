function App() {
    this.menuItems = null;
    this.contentContainer = null;
    this.contentPool = null;
    this.activeContent = null;
    this.init();
}

App.prototype.init = function() {
    var i = 0;

    this.contentContainer = document.querySelectorAll('#contentWrapper')[0];
    this.contentPool = document.querySelectorAll('#contentPool')[0];
    this.menuItems = document.querySelectorAll('[data-target]');
    this.infoItems = document.querySelectorAll('[data-target-info]');

    this.initListener(this.menuItems);
    this.initListener(this.infoItems, 'info');
};

App.prototype.initListener = function(elements, type) {
    for (i = 0; i < elements.length; i++) {
        scope = this;
        elements[i].onclick = function(event) {
            event.preventDefault();
            if (type == 'info') {
                scope.showInfo(event.currentTarget);
            } else {
                scope.showContent(event.currentTarget);
            }
        }
    }
};


App.prototype.showContent = function(obj) {
    var targetName = obj.attributes['data-target'].value;

    if (this.activeContent) {
        this.contentPool.appendChild(this.activeContent);
    }
    this.activeContent = document.querySelectorAll('[data-content=' +  targetName +']')[0];
    this.contentContainer.appendChild(this.activeContent);
};

App.prototype.showInfo = function(obj) {
    var overlay = document.querySelectorAll('#overlay')[0],
        overlayWrapper = document.querySelectorAll('#overlayWrapper')[0];

        overlay.style.display = 'block';
        overlayWrapper.style.display = 'block';
};

