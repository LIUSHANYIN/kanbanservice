"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _paginate = _interopRequireDefault(require("../helpers/paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchUsers = () => {
  return _User.default.find();
};

var addColumn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (_ref2) {
    var {
      userId,
      columnName,
      color
    } = _ref2;
    var {
      columnDate
    } = yield _User.default.findById(userId);
    columnDate.push({
      cards: [{
        title: "foo"
      }, {
        title: "bar"
      }],
      title: columnName,
      color: color
    });
    return _User.default.findByIdAndUpdate(userId, {
      $set: {
        columnDate
      }
    }, {
      new: true
    });
  });

  return function addColumn(_x) {
    return _ref.apply(this, arguments);
  };
}();

var deleteColumn = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (_ref4) {
    var {
      userId,
      columnIndex
    } = _ref4;
    var {
      columnDate
    } = yield _User.default.findById(userId);
    columnDate.splice(columnIndex, 1);
    return _User.default.findByIdAndUpdate(userId, {
      $set: {
        columnDate
      }
    }, {
      new: true
    });
  });

  return function deleteColumn(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteCard = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (_ref6) {
    var {
      userId,
      columnIndex,
      cardIndex
    } = _ref6;
    var {
      columnDate
    } = yield _User.default.findById(userId);
    columnDate[columnIndex].cards.splice(cardIndex, 1);
    return _User.default.findByIdAndUpdate(userId, {
      $set: {
        columnDate
      }
    }, {
      new: true
    });
  });

  return function deleteCard(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var addCard = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (_ref8) {
    var {
      userId,
      columnIndex,
      cardName
    } = _ref8;
    var {
      columnDate
    } = yield _User.default.findById(userId);
    columnDate[columnIndex].cards.push({
      title: cardName
    });
    return _User.default.findByIdAndUpdate(userId, {
      $set: {
        columnDate
      }
    }, {
      new: true
    });
  });

  return function addCard(_x4) {
    return _ref7.apply(this, arguments);
  };
}();

var UserController = {
  fetchUsers,
  addColumn,
  deleteColumn,
  deleteCard,
  addCard
};
var _default = UserController;
exports.default = _default;