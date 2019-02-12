function OrganisationVM(){
	var self = this;
    self.name = ko.observable();
	self.description = ko.observable();

	self.nameEntered = ko.observable();
	self.descriptionEntered = ko.observable();

	self.canRegister = function(){
		var canRegister;
		if(self.name()){
			self.nameEntered(true);
			canRegister = true;
			
		}else{
			self.nameEntered(false);
			canRegister = false;
		}

		if(self.description()){
			self.descriptionEntered(true);
			canRegister = true;
		}else{
			self.descriptionEntered(false);
			canRegister = false;
		}
		return canRegister;
	}

	self.RegisterOrganisation = function(){
		console.log(ko.toJSON(this));
		if(self.canRegister()){
			$.ajax({
				url: "https://partsunlimited-api-uybsaoej6pvsa.azurewebsites.net/api/Organisations/createOrganisation",
				type: "post",
				data: ko.toJSON(this),
				contentType: "application/json",
				success: function (result) {
				}
			});
		}
		
	};
	
}
ko.applyBindings(new OrganisationVM());