
//////////////////////////////////////////////////////////////////////////
finalCart = {};

var clevertap = {event:[],profile:[], account:[], onUserLogin:[],
  notifications:[], privacy:[]};

clevertap.account.push({"id": "WR5-K46-Z95Z"});
clevertap.privacy.push({optOut: false});
clevertap.privacy.push({useIP: true});

var firebaseConfig = {
    apiKey: "AIzaSyAthOwP0h2io8QptvkixE71Aonluh9j5og",
    authDomain: "avneesh-first-website.firebaseapp.com",
    databaseURL: "https://avneesh-first-website.firebaseio.com",
    projectId: "avneesh-first-website",
    storageBucket: "avneesh-first-website.appspot.com",
    messagingSenderId: "982610559404",
    appId: "1:982610559404:web:cb07bbd9ec9c208c6e7a09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

(function () {
		 var wzrk = document.createElement('script');
		 wzrk.type = 'text/javascript';
		 wzrk.async = true;
		 wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
		 var s = document.getElementsByTagName('script')[0];
		 s.parentNode.insertBefore(wzrk, s);
  })();


function ColorChosen(colorChosenUser){
  if (!('itemName-'+colorChosenUser.id.slice(-1) in finalCart)){
    finalCart['itemName-'+colorChosenUser.id.slice(-1)] = {'Type':colorChosenUser.textContent};
  }
  else {
    finalCart['itemName-'+colorChosenUser.id.slice(-1)]['Type'] = colorChosenUser.textContent;
  }
  sampleList = document.getElementsByName('KitType-'+colorChosenUser.id.slice(-1));
  for (var x =0; x < sampleList.length;x++){
    sampleList[x].className = '';
  }
  document.getElementById(colorChosenUser.id).className = 'btn btn-success';

}

function SizeChosen(sizeChosenUser){
  if (!('itemName-'+sizeChosenUser.id.slice(-1) in finalCart)){
    finalCart['itemName-'+sizeChosenUser.id.slice(-1)] = {'Size': sizeChosenUser.textContent};
  }
  else {
    finalCart['itemName-'+sizeChosenUser.id.slice(-1)]['Size'] = sizeChosenUser.textContent;
  }

  document.getElementById("dropdownButtonSize-"+sizeChosenUser.id.slice(-1)).textContent = sizeChosenUser.textContent;
}

function QuantityChosen(quantityChosenUser){
  quantityChosenUser.value =quantityChosenUser.value.replace(/[^0-9]/g,'');

  if (quantityChosenUser.value>10){
    quantityChosenUser.value=10;
  }

  if (!('itemName-'+quantityChosenUser.id.slice(-1) in finalCart)){
    finalCart['itemName-'+quantityChosenUser.id.slice(-1)] = {'Quantity': quantityChosenUser.value};
  }
  else {
    finalCart['itemName-'+quantityChosenUser.id.slice(-1)]['Quantity'] = quantityChosenUser.value;
  }

}

function AddToCartFn(cartElmnt){
  var a = finalCart['itemName-'+cartElmnt.id.slice('-1')]['Type'];
  var b= finalCart['itemName-'+cartElmnt.id.slice('-1')]['Size'];
  var c = finalCart['itemName-'+cartElmnt.id.slice('-1')]['Quantity']
  var d = document.getElementById('itemName-'+cartElmnt.id.slice('-1')).innerHTML;

  clevertap.event.push('Added To Cart',{
    'Product Name': d,
    'Product Type': a,
    'Product Size': b,
    'Product Quantity': c,
  });

  clevertap.notifications.push({
  "titleText":'Would you like to receive Push Notifications?',
  "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
  "okButtonText":'Sign me up!',
  "rejectButtonText":'No thanks',
  "okButtonColor":'#f28046'});

}
