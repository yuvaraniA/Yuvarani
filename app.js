const data = [

    {
        "Id": "0001",
        "Name": "Ampa Crystal Inn",
        "Address": {
            "line1": " Old No. 349, New No. 623",
            "line2": "Poonamallee High Road, Aminjikarai"
        },
        "City": " Chennai",
        "State": "Tamil Nadu",
        "pincode": " 600029",
        "phone": " 044-23741999",
        "Type": "Budget",
        "Rooms": " 49",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },

    {
        "Id": "0002",
        "Name": "Hotel Devi Prema Palace",
        "Address": {
            "line1": " 47, Ponamalle High Road",
            "line2": " Everest Hotel Building"
        },
        "City": "Chennai",
        "State": "Tamil Nadu",
        "pincode": "600003",
        "phone": " 044-42042715",
        "Type": "Budget",
        "Rooms": " 48",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },

    {
        "Id": "0003",
        "Name": "Hotel Mgm Grand",
        "Address": {
            "line1": " 31, Santhome High Road",
            "line2": " Mylapore"
        },
        "City": "Chennai",
        "State": "Tamil Nadu",
        "pincode": "600004",
        "phone": " 044-24980320, 24980399",
        "Type": "Budget",
        "Rooms": " 26",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },
    {
        "Id": "0004",
        "Name": "Hotel Sree Krishna",
        "Address": {
            "line1": " No. 274/159",
            "line2": "Peters Road"
        },
        "City": "Bangalore",
        "State": "Karnataka",
        "pincode": " 900086",
        "phone": " 088-28522897, 28525147",
        "Fax": "088-28525037",
        "Type": "Budget",
        "Rooms": " 13",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },
    {
        "Id": "0005",
        "Name": "Krishna Residency",
        "Address": {
            "line1": " No. 37, Opposite To Kabaleeshwarar Koil",
            "line2": " South Mada Street, Mylapore"
        },
        "City": "Cochin",
        "State": "Kerala",
        "pincode": " 900004",
        "phone": " 048-24643617, 24641223",
        "Type": "Budget",
        "Rooms": " 24",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },
    {
        "Id": "0006",
        "Name": "L R Swami Hotels Pvt Ltd",
        "Address": {
            "line1": " 105, Usman Road",
            "line2": " Thyagaraya Nagar"
        },

        "City": "Chennai",
        "State": "Tamil Nadu",
        "pincode": " 600017",
        "phone": " 044-24339769",
        "Type": "Budget",
        "Rooms": " 19",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },
    {
        "Id": "0007",
        "Name": "Picnic Hotel Pvt Ltd",
        "Address": {
            "line1": " 1132/2, P H Road",
            "line2": " Park Town"
        },
        "City": "Coimbatore",
        "State": "Tamil Nadu",
        "pincode": "600003",
        "phone": " 044-66785888, 66785889",
        "Type": "Budget",
        "Rooms": " 57",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },
    {
        "Id": "0008",
        "Name": "Sudha Inn Pvt Ltd",
        "Address": {
            "line1": " New No. 111, (Old No.97)",
            "line2": " High Road"
        },

        "City": "Tirchy",
        "State": "Tamil Nadu",
        "pincode": "600084",
        "phone": " 044-28252255",
        "Email": " hotelsudhainn@yahoo.co.in",
        "Website": " www.hotelsudha.in",
        "Type": "Budget",
        "Rooms": " 60",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },
    {
        "Id": "0009",
        "Name": "Tourist Home",
        "Address": {
            "line1": " 45, Gandhi Irwin Road",
            "line2": " Egmore"
        },
        "City": "Chennai",
        "State": "Tamil Nadu",
        "pincode": " 600008",
        "phone": " 044-28194679 , 42146471",
        "Type": "Budget",
        "Rooms": " 64",
        "MaxPrice": " INR 1200",
        "MinPrice": " INR 500"
    },
    {
        "Id": "0010",
        "Name": "Hotel Mars Classic",
        "Address": {
            "line1": " 8, GST Road",
            "line2": " Pallavaram"
        },

        "City": "Chennai",
        "State": "Tamil Nadu",
        "pincode": " 600043",
        "phone": " 044-42076706, 42076707, 42076708, 42076709",
        "Email": " reservation@hotelmars.net",
        "Website": " www.marshotels.in",
        "Type": " 1 Star",
        "Rooms": " 36",
        "MaxPrice": " INR 2000",
        "MinPrice": " INR 1300"
    },
    {
        "Id": "0011",
        "Name": "Hotel New Park",
        "Address": {
            "line1": " 136 & 137, Bells Road",
            "line2": "  Near MAC, Chepauk"
        },
        "City": "Chennai",
        "State": "Tamil Nadu",
        "pincode": " 600005",
        "phone": " 044-28588889",
        "Email": " newparkp@yahoo.co.in",
        "Website": " www.hotelnewpark.co.in",
        "Type": " 1 Star",
        "Rooms": " 20",
        "MaxPrice": " INR 2000",
        "MinPrice": " INR 1000"
    },
    {
        "Id": "0012",
        "Name": "Hotel Nirmala Dakshin",
        "Address": {
            "line1": " 811, Vummidiars Shopping Centre",
            "line2": " Anna Salai, Mount Road"
        },
        "City": "Chennai",
        "State": "Tamil Nadu",
        "pincode": "600002",
        "phone": " 044-28520578, 28520577",
        "Email": " nirmaladakshin@hotelschennai.com",
        "Type": " 1 Star",
        "Rooms": " 49",
        "MaxPrice": " INR 1800",
        "MinPrice": " INR 1200"
    }];
function clicked() {
    let value = document.getElementById('value').value;
    let type = document.getElementById('type').value;
    let city = document.getElementById('city').value;
	let result = false;
    for (let i = 0; i < data.length; i++) {
        
        if (data[i].City.toString().trim() === city && data[i].pincode.toString().trim() === value && data[i].Type.toString().trim() === type) {
            document.writeln('Name : ' + data[i].Name.toString());
            document.write("<br>");
            document.writeln('Address : ' + data[i].Address.line1.toString() + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data[0].Address.line2.toString());
            document.write("<br>");
            document.writeln('State : ' + data[i].State.toString());
            document.write("<br><br>");
			document.writeln( 'Pincode : ' + data[i].pincode.toString());
			document.write("<br><br>");
            document.writeln('Phone : ' + data[i].phone.toString());
			document.write("<br><br>");
            document.writeln('Rooms Available : ' + data[i].Rooms.toString());
			document.write("<br><br>");
            document.writeln('Maximum price : ' + data[i].MaxPrice.toString());
			document.write("<br><br>");
            document.writeln('Minimum price : ' + data[i].MinPrice.toString());
			result = true;
        }
    }
	
	if(result == false){
		alert("No Result Found")
	}



};