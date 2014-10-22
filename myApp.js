function contrllr($scope){
	$scope.op1="0";
	$scope.ans1=null;
	$scope.oppet=null;
	$scope.op2="0";
	$scope.ans2=null;
	$scope.vary1="0";
	$scope.final=null;
	$scope.vary2="0";
	$scope.vary3="0";
	
	$scope.numberString = function(str){
		
		if(parseInt($scope.vary1)==0){
			$scope.op1+=str;
			$scope.ans1=parseInt($scope.op1);	
		}else if(parseInt($scope.vary3)==0){
			$scope.op2+=str;
			$scope.ans2=parseInt($scope.op2);
			$scope.vary2="1";
		}
				
			 	  
	};
	
	$scope.operator = function(opr){
		
		if(parseInt($scope.vary2)==0){
			if(opr==13){
				$scope.oppet="+";
			}else if(opr==10){
				$scope.oppet="*";
			}else if(opr==12){
				$scope.oppet="-";
			}else{
				$scope.oppet="/";
			}
			$scope.vary1="1";
			
		}else{
				$scope.ans1 = $scope.final;
				$scope.ans2=null;
				$scope.vary3="0";
				$scope.op2="0";
				$scope.vary2="0";
				
				if(opr==13){
				$scope.oppet="+";
				}else if(opr==10){
				$scope.oppet="*";
				}else if(opr==12){
				$scope.oppet="-";
				}else{
				$scope.oppet="/";
				}
		}
	};
	
	$scope.getFinal  = function(){
		if($scope.oppet=="+"){
			$scope.final=$scope.ans1+$scope.ans2;
		}else if($scope.oppet=="-"){
			$scope.final=$scope.ans1-$scope.ans2;
		}else if($scope.oppet=="*"){
			$scope.final=$scope.ans1*$scope.ans2;
		}else{
			$scope.final=$scope.ans1/$scope.ans2;
		}
		$scope.vary3="1";
	};
	
	$scope.clearAll = function(){
		$scope.op1="0";
	$scope.ans1=null;
	$scope.oppet=null;
	$scope.op2="0";
	$scope.ans2=null;
	$scope.vary1="0";
	$scope.final=null;
	$scope.vary2="0";
	$scope.vary3="0";
	};
	

	
	
}
