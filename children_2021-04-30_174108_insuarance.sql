DROP TABLE IF EXISTS members;
CREATE TABLE `members` (
  `child_id` varchar(10) NOT NULL,
  `cert_nbr` varchar(11) NOT NULL,
  `fname` varchar(10) NOT NULL,
  `yob` int NOT NULL,
  `card_nbr` varchar(30) DEFAULT NULL,
  `lname` varchar(13) DEFAULT NULL,
  `mname` varchar(9) DEFAULT NULL,
  `age` int NOT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `partner_id` int NOT NULL,
  PRIMARY KEY (`child_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO members(child_id,cert_nbr,fname,yob,card_nbr,lname,mname,age,Status,partner_id) VALUES('3181819-03','BC463923','MIKEEDWARD',2006,NULL,NULL,NULL,15,NULL,0),('3181825-03','BC539010','JEDIDAH',2004,NULL,'WANJA',NULL,17,NULL,0),('3181825-04','BC 443913','ANGEL',2009,NULL,'MUTHONI','ROSE',12,NULL,0),('3181825-05','BC184304','VICTOR',2011,NULL,'NDUNGU','EMMAMNUEL',10,NULL,0),('3181828-03','BC401875','JOY',2009,NULL,'WAMBUI','NEEMA',12,NULL,0),('3181830-03','BC744519','SHALOM',2004,NULL,'WAMBOI',NULL,17,NULL,0),('3181830-04','BC875176','BENEDICT',2011,NULL,'WANGAI',NULL,10,NULL,0),('3181834-03','BC608505','KOIBITA',2007,NULL,'KIHOTO',NULL,14,NULL,0),('3181835-03','BC315233','STEPHEN',2007,NULL,'MUNIU',NULL,14,NULL,0),('3181835-04','BC315232','JOSEPH',2007,NULL,'KARANJA',NULL,14,NULL,0),('3181836-03','BC976633','JOSEPH',2008,NULL,'NJENGA',NULL,13,NULL,0),('3181836-04','BC 2626821','EBENEZER',2013,NULL,'NJUGUNA',NULL,8,NULL,0),('3181837-03','BC 93640','EVANGEL',2008,NULL,'WAITHIRA',NULL,13,NULL,0),('3181841-03','BC 822768','LILY',2004,NULL,'WANGECHI',NULL,17,NULL,0),('3181843-03','BC 35440','JESLOVE',2004,NULL,'KIO','MARY',17,NULL,0),('3181843-04','BC 771026','VICTORY',2008,NULL,'MWENDE',NULL,13,NULL,0),('3181844-03','BC 016418','IRENE',2005,NULL,'WANJIRU',NULL,16,NULL,0),('3181844-04','BC 676563','JOHN',2007,NULL,'KARONGO',NULL,14,NULL,0),('3181844-05','BC 2610716','AUGUSTINE',2012,NULL,'NG\'ANG\'A',NULL,9,NULL,0),('3181846-03','BC 830695','TIMOTHY',2008,NULL,'RUGU',NULL,13,NULL,0),('3181849-03','BC 259734','MARK',2006,NULL,'GITAU',NULL,15,NULL,0),('3181849-04','BC 453727','JEFF',2015,NULL,'NJAGI',NULL,6,NULL,0),('3181850-03','BC 174895','LEORNARD',2004,NULL,'NJUGUNA',NULL,17,NULL,0),('3181856-03','BC 872049','MAGAA',2007,NULL,'MALAKI',NULL,14,NULL,0),('3181857-03','BC 2742014','PATIENCE',2008,NULL,'WANJIRU',NULL,13,NULL,0),('3181861-03','BC 909932','EVERLYNE',2005,NULL,'WAMBUI','GRACE',16,NULL,0),('3181861-04','BC 772115','REYNARD',2010,NULL,'KINYANJUI','JOHN',11,NULL,0),('3181862-03','BC 7305426','MARK',2017,NULL,'KIARIE','VICTOR',4,NULL,0),('3181862-04','BC 3337209','DANIEL',2014,NULL,'WAGURA','PAUL',7,NULL,0),('3181862-05','BC 5331331','EHUD',2005,NULL,'KAGIKI','JAMES',16,NULL,0),('3181863-03','BC 139230','ESTHER',2014,NULL,'WANJIRU',NULL,7,NULL,0),('3181863-04','BN 8232977','DAN',2019,NULL,'MUNGAI','CHARLES',2,NULL,0),('3181863-05','BC 145237','HEMAN',2011,NULL,'KAMAU',NULL,10,NULL,0),('3181865-03','BC 264643','MARTIN',2010,NULL,'KIRATA','LUTHER',11,NULL,0),('3181865-04','BC 3145258','VALENTINE',2014,NULL,'WAMBUI','ELIZABETH',7,NULL,0),('3181865-05','BC 3145259','JOHN',2012,NULL,'MUIRURI','CALVIN',9,NULL,0),('3181867-03','BC 2569184','NEEMA',2011,NULL,'NJAMBI',NULL,10,NULL,0),('3181867-04','BC-9902700','EMMANUEL',2014,NULL,'MBUGUA',NULL,7,NULL,0),('3181869-03','BC 2930508','VIVIAN',2007,NULL,'NYAMBURA',NULL,14,NULL,0),('3181869-04','BC 1553548','EMMANUELA',2018,NULL,'NJERI','DANIELA',3,NULL,0),('3181869-05','BC 1553547','PHILIP',2018,NULL,'MBUGUA',NULL,3,NULL,0),('3181871-03','BC 780316','ARIANA',2010,NULL,'WANJIKU',NULL,11,NULL,0),('3181871-04','BC 0877199','JAYSON',2013,NULL,'NJOROGE',NULL,8,NULL,0),('3181875-03','BC 420502','FAITH',2009,NULL,'WANJIKU',NULL,12,NULL,0),('3181875-04','BC 1895337','AIMEE',2013,NULL,'MUTHONI',NULL,8,NULL,0),('3181875-05','BC 0567855','EMMANUEL',2017,NULL,'KIGOTHO',NULL,4,NULL,0),('4','36714344','MIRIAM',1999,NULL,'WANJIRU KIBII','NELLY',22,NULL,0),('8','BC4047201','ANDREW',2003,NULL,'KAIMONJI','TIMOI',18,NULL,0);







