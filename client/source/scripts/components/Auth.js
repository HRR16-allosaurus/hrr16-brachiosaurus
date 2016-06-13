var Auth = {
  componentWillMount: function() {
    this.setupAjax();
    this.createLock();
    this.setState({idToken: this.getIdToken()})
  },

  createLock: function() {
    this.lock = new Auth0Lock('toGUh2lDkLQ1FUJxqkUp16VDlur8M1WI', 'hrr16brachiosaurus.auth0.com');
  },

  getLock: function(){
    return this.lock;
  },

  setupAjax: function() {
    $.ajaxSetup({
      'beforeSend': function(xhr) {
        if (localStorage.getItem('userToken')) {
          xhr.setRequestHeader('Authorization',
                'Bearer ' + localStorage.getItem('userToken'));
        }
      }
    });
  },

  showOnAuthentication(component){
    if(!this.state.idToken){
      return <Home />
    } else {
      return component;
    }
  },

  getIdToken: function() {
    var idToken = localStorage.getItem('userToken');
    var authHash = this.lock.parseHash(window.location.hash);
    console.log(authHash)
    if (!idToken && authHash) {
      console.log('im inside')
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token);
      }
      if (authHash.error) {
        console.log("Error signing in", authHash);
      }
    }
    return idToken;
  }
}

export default Auth;
