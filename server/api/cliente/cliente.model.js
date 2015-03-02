'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClienteSchema = new Schema({
  nombre: {type:String,require:true},
  cedula: {type:String,unique:true},
});

module.exports = mongoose.model('Cliente', ClienteSchema);