conversionApp.controller('MetricConversionController', function($scope) {

	//initialization	
	$scope.isKmToMile = true;
	$scope.$on('$viewContentLoaded', function() {
		$scope.resetFields();
		$scope.setCurrent();
	});
	
	$scope.kmToMile = function() {
		if($scope.km) {
			$scope.mile = $scope.km * 0.621371192;
		}
		else {
			$scope.mile = '';
		}
	};

	$scope.mileToKm = function() {
		if($scope.mile) {
			$scope.km = $scope.mile * 1.621371192;
		}
		else {
			$scope.mile = '';
		}
	};

	$scope.celsiusToFahrenheit = function() {
		if($scope.celsius) {
			$scope.fahrenheit = $scope.celsius * 1.8 + 32;
		}
		else {
			$scope.celsius = '';
		}
	};

	$scope.fahrenheitToCelsius = function() {
		if($scope.fahrenheit) {
			$scope.celsius = ($scope.fahrenheit - 32) * (5/9);
		}
		else {
			$scope.celsius = '';
		}
	};

	$scope.kelvinToCelsius = function() {
		if($scope.kelvin) {
			$scope.celsius = $scope.kelvin - 273;
		}
		else {
			$scope.celsius = '';
		}
	};

	$scope.setKmToMile = function() {
		$scope.isKmToMile = $scope.setCurrent();
	};

	$scope.setMileToKm = function() {
		$scope.isMileToKm = $scope.setCurrent();
	};

	$scope.setCelsiusToFahrenheit = function() {
		$scope.isCelsiusToFahrenheit = $scope.setCurrent();
	};

	$scope.setFahrenheitToCelsius = function() {
		$scope.isFahrenheitToCelsius = $scope.setCurrent();
	};

	$scope.setKelvinToCelsius = function() {
		$scope.isKelvinToCelsius = $scope.setCurrent();
	};

	$scope.resetFields = function() {
		$scope.km = '';
		$scope.mile = '';
		$scope.celsius = '';
		$scope.fahrenheit = '';
		$scope.kelvin = '';

	};

	$scope.setCurrent = function() {
		$scope.resetFields();

		$scope.isMileToKm =  false;
		$scope.isKmToMile =  false;
		$scope.isCelsiusToFahrenheit =  false;
		$scope.isFahrenheitToCelsius =  false;
		$scope.isKelvinToCelsius =  false;

		return true;
	};

});
