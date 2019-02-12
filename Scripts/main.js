const URL = 'http://localhost/api/DummyModels';


function editProfileViewModel(){
	var self = this;
	self.firstName = ko.observable();
	self.lastName = ko.observable();
	self.phone = ko.observable();
	self.email = ko.observable();
	self.password = ko.observable();
	self.confirmPassword = ko.observable();
	self.manager = ko.observable();

	self.passwordEntered = ko.observable();
	self.matchPassword = ko.observable();
	self.firstNameEntered = ko.observable();
	self.lastNameEntered = ko.observable();
	self.emailEntered = ko.observable();
	self.phoneEntered = ko.observable();

	self.availableManagers = ko.observableArray([
		{id: 1, name: "jack", lastName: "black", phone: "012 333 4444"},
		{id: 2, name: "jack1", lastName: "black1", phone: "012 333 4444"},
		{id: 3, name: "jack2", lastName: "black2", phone: "012 333 4444"},
		{id: 4, name: "jack3", lastName: "black3", phone: "012 333 4444"},
		{id: 5, name: "jack4", lastName: "black4", phone: "012 333 4444"}
	]);

	self.canRegister = function(){
		var canRegister;
		if(self.password()){
			self.passwordEntered(true);
			if(self.password() != self.confirmPassword()){
				self.matchPassword(false);
				canRegister = false;
			}else{
				self.matchPassword(true);
				canRegister = true;
			}
		}else{
			self.passwordEntered(false);
			canRegister = false;
		}

		if(!self.firstName()){
			self.firstNameEntered(false);
			canRegister = false;
		}else{
			self.firstNameEntered(true);
			canRegister = true;
		}

		if(!self.lastName()){
			self.lastNameEntered(false);
			canRegister = false;
		}else{
			self.lastNameEntered(true);
			canRegister = true;
		}

		if(!self.phone()){
			self.phoneEntered(false);
			canRegister = false;
		}else{
			self.phoneEntered(true);
			canRegister = true;
		}

		if(!self.email()){
			self.emailEntered(false);
			canRegister = false;
		}else{
			self.emailEntered(true);
			canRegister = true;
		}
		return canRegister;
	};
    /*
    self.recruiter = ko.computed(new function(){
        var rec = this;
        rec.firstName = self.firstName;
        rec.lastName = self.lastName;
        rec.phone = self.phone;
        rec.email = self.email;
        rec.password = self.password;
        rec.manager = self.manager;
        return this;
    });*/
    //console.log(ko.toJSON(self.recruiter));
	self.register = function(){
		if(self.canRegister()){
            var body = {
                firstName: self.firstName(),
                LastName: self.lastName(),
                Username: self.email(),
                Password: self.password()
            }
            console.log(ko.toJSON(body));
            
			$.ajax({
                type: "post",
                url: URL+"/users/register",
                data: ko.toJSON(body),
                dataType: "json",
				contentType: "application/json",
				success: function (result) {
                    console.log(result);
					//assuming result will contain the server-side customer id
					//we provide that value to our customer's id observable
					//and knockout will update the UI
					//customer.id(result.newCustomerId);
					//no need to update the entire array, and 
					//our 'customer' has already been pushed into our 
					//observable array so we're done. 
				}
			});
		}
	};
}
ko.applyBindings(new editProfileViewModel());