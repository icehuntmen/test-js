/**
 * Lite util for run function
 * @type {{set: set, run: run, Exception: Exception}}
 */
const task = {

    run: function (props,descr = {}) {
        if(typeof props !== 'function') {return new this.Exception('is not function')}
        this.runFunction = props;
        this.nameFunction = props.name;
        this.nameTask = descr.name || props.name;
        this.descriptionTask = descr.description || 'Description not found';
        return this;
    },

    set: function (...arr) {
        if(this.runFunction === undefined) { throw new this.Exception('Please use task.run(function,description).set(...params) and try again')}

        console.log('Task: \x1b[36m%s\x1b[0m',this.nameTask)
        console.log('\x1b[33m%s\x1b[0m',this.descriptionTask)
        console.log('\x1b[33m%s\x1b[0m','------[ Run task ] ---------')
        arr.forEach((exc, index) => {
            console.log('param = ', exc);
            console.time('Execution time');
            console.log(this.nameFunction + '(param) = ', this.runFunction(exc));
            console.timeEnd('Execution time');
            console.log('\x1b[33m%s\x1b[0m','----------------------------');
        })
    },
    Exception: function (message) {
        this.message  = message;
    }
}

module.exports.task = task;
