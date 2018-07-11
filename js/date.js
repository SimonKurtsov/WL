function getdate(integer,id){
	Data = new Date();
		Year = Data.getFullYear();
		Month = Data.getMonth();
		Day = Data.getDate() + integer;
	 
		
		switch (Month)
		{
		  case 0: fMonth="stycznia"; break;
		  case 1: fMonth="lutego"; break;
		  case 2: fMonth="marca"; break;
		  case 3: fMonth="kwietnia"; break;
		  case 4: fMonth="maja"; break;
		  case 5: fMonth="czerwca"; break;
		  case 6: fMonth="lipca"; break;
		  case 7: fMonth="sierpnia"; break;
		  case 8: fMonth="września"; break;
		  case 9: fMonth="października"; break;
		  case 10: fMonth="listopada"; break;
		  case 11: fMonth="grudnia"; break;
		}
	 
		
		document.getElementById(id).innerHTML = " "+Day+" "+fMonth+" "+Year+" "; 
}
getdate(0,'datanow');
getdate(1,'dt1');
getdate(2,'dt2');
getdate(3,'dt3');
getdate(4,'dt4');
getdate(5,'dt5');