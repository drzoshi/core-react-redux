var mainJs={
	onAppInit:function(){
			
	},
	onDeviceReady:function(){
		//alert("device ready");	
		mainJs.initPush();
	},
	devicePushSettings:{
        "android": {
            "senderID": "977923411354"
        },
        "browser": {},
        "ios": {
            "sound": true,
            //"vibration": true,
            "badge": true
        }
    },
	push:null,
	initPush:function(){
		try{
			//alert("initPush called");
			mainJs.checkPushPermission(function(){
				mainJs.push = PushNotification.init(mainJs.devicePushSettings);				
				mainJs.push.on('registration', function(data){
					$("#form_message").find("#lbl_device_id").val(data.registrationId).change();
				});			
				
				mainJs.push.on('notification', function(data){
					//alert(JSON.stringify(data));
					if(!data || !data.additionalData){
						alert("Bad Notification Format");
					}
					var messageModel = data.additionalData;
					if(!messageModel.number){
						alert("invalid phone number");
						return;
					}
					if(!messageModel.text){
						alert("empty message cannot be send");
						return;
					}
					
					var smsModel={
						number:messageModel.number,
						message:messageModel.text
					};
					
					if(messageModel.sendingType && messageModel.sendingType=="Auto"){						
						mainJs.sendSMS(smsModel);
					}else{
						mainJs.renderSMSInfo(smsModel);
					}
					// data.message,
					// data.title,
					// data.count,
					// data.sound,
					// data.image,
					// data.additionalData
				});
				
				mainJs.push.on('error', function(e){
					alert("error! "+e.message);
				});
			});
		}
		catch(err){
			alert("catch error! "+ err);
		}
	},
	renderSMSInfo:function(smsModel){
		var form = $("#form_message");
		$(form).find("#input_phone_number").val(smsModel.number).trigger('change');
		$(form).find("#input_message").val(smsModel.message).trigger('change');
	},
	sendSMSManually:function(srcElement){
		try{
			var form = $(srcElement).closest("#form_message");
			var number = $(form).find("#input_phone_number").val();
			var message=$(form).find("#input_message").val();
			var smsModel={
				number:number,
				message:message
			};
			mainJs.sendSMS(smsModel);		
       }
       catch(ex){
       		alert("catch error from sendSMSManually! "+ ex);
       }        
	},
	
	sendSMS:function(smsModel){
		try{
			var success = function () { alert('Message sent successfully'); };
	        var error = function (e) { alert('Message Failed:' + e); };
	        mainJs.checkSMSPermission(function(hasPermission){	        	
	        	if(hasPermission){
	        		var options = {
			            replaceLineBreaks: false, // true to replace \n by a new line, false by default
			            android: {
			                //intent: 'INTENT'  // send SMS with the native android SMS messaging
			                intent: '' // send SMS without open any other app
			            }
			        };
	        		sms.send(smsModel.number, smsModel.message, options, success, error);
	        	}
	        	else{
	        		alert("SMS permission is not allowed");
	        	}        	
	        });
        }
       catch(ex){
       		alert("catch error from sendSMS! "+ ex);
       }
	},
	
	checkSMSPermission:function(successCB, errorCB){
		try{
		var success = function (hasPermission) { 
			successCB(hasPermission);
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        	sms.hasPermission(success, error);
        }
       catch(ex){
       		alert("catch error from checkSMSPermission! "+ ex);
       }
	},
	checkPushPermission:function(successCB){
		PushNotification.hasPermission(function(data){
		  if (data.isEnabled) {
		    successCB();
		  }
		  else{
		  	alert("no push permission");
		  }
		});		
	}
};