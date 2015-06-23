module.exports = function(Videos) {

	  Videos.status = function(cb) {
	    var response = 'We are open for business.';
	    cb(null, response);
	  };
	  Videos.remoteMethod(
	    'status',
	    {
	      http: {path: '/status', verb: 'get'},
	      returns: {arg: 'status', type: 'string'}
	    }
	  );

};
