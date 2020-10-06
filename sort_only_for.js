function NodeSort(_value) {
    this.value = _value;
    this.pre = null;
    this.next = null;
}
// 添加
NodeSort.prototype.pipe = function (_value) {
    // 新值大于或等于当前值
    if (_value >= this.value) {
        this.toPreNode(_value);
    } else if (_value < this.value) {
        this.toNextNode(_value)
    }
}
// 去上一个节点查对比
NodeSort.prototype.toPreNode = function (_value) {
    if (this.pre == null) {
        let newNode = new NodeSort(_value);
        this.insertNode(null, newNode, this);
    } else if (_value > this.pre.value) {
        this.pre.pipe(_value);
    } else {
        let newNode = new NodeSort(_value);
        this.insertNode(this.pre, newNode, this);
    }
}
// 去下一个节点中对比
NodeSort.prototype.toNextNode = function (_value) {
    if (this.next == null) {
        let newNode = new NodeSort(_value);
        this.insertNode(this, newNode, null)
    } else if (_value < this.next.value) {
        this.next.pipe(_value);
    } else {
        let newNode = new NodeSort(_value);
        this.insertNode(this, newNode, this.next)
    }
}
NodeSort.prototype.insertNode = function (preNode, newNode, nextNode) {
    newNode.next = nextNode;
    newNode.pre = preNode;

    if (nextNode) {
        nextNode.pre = newNode;
        nextNode.next = nextNode.next;
    }

    if (preNode) {
        preNode.pre = preNode.pre
        preNode.next = newNode;
    }
}
NodeSort.prototype.getFirst = function () {
    if (this.pre == null) {
        return this;
    } else {
        return this.pre.getFirst();
    }
}
NodeSort.prototype.getLast = function () {
    if (this.next == null) {
        return this;
    } else {
        return this.next.getLast();
    }
}
module.exports = NodeSort;