'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:AuthorizationCtrl
 * @description
 * # AuthorizationCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('AuthorizationCtrl', function ($scope) {
		var titleEN = 'Autoryzacja';
		var introductionEN = `Jak dotąd dowiedzieliśmy się, 
		że Blokchain używa publicznych kluczów kryptograficznych jako numerów kont i 
		wykorzystuje podejście przywatno-publiczne do przesyłania własności pomiędzy kontami.  
		Jednakże musimy zapewnić, że prawowity właściciel może przenosić jego mienie do innych kont. 
		W tym rozdziale postaramy się wyjaśnić jak kryptografia asymetryczna to umożliwia. `;
		var elementsEN = [
		  {
			title: 'Cel autoryzacji',
			content: `Głównym celem autoryzacji jest zapewnienie, że właściciel konta może przemieszczać swoją  własność do innych kont w autoryzowany sposób. 
								Głównymi krokami autoryzacji są: identyfikacja konta, ustanawianie zgody pomiędzy właścicielem a zawartością konkretnej transakcji oraz 
								akceptacja dokonania transakcji poprzez zgodę na dodanie transakcji do historii. `,
			id: '1'
		  },
		  {
			title: ' Jak stworzyć podpis?',
			content: `Pierwszy krok ma na celu utworzenie zahaszowanej wartości danych, które chcemy przesłać oraz zabezpieczenie ich kluczem prywatnym. Zakodowane dane są od teraz podpisem cyfrowym przesyłanych danych. Zabezpieczenie to jest unikalne w nawiązaniu do dwóch kwestii: 
								Po pierwsze dane mogą być przywrócone w jednoznaczny sposób ponieważ są zabezpieczone unikalnym kluczem prywatnym. 
								Po drugie jest ono unikalne w odniesieniu do danych, które chcemy wysłać ponieważ oparte jest na cyfrowym odcisku palcu danych. 
								Następnie zarówno dane jak i cyfrowy podpis są umieszczane razem w pliku, który jest cyfrowo podpisaną wiadomością do wysłania.`,
			id: '2'
		  },
		   {
			title: 'Potwierdzanie danych, wykorzystując podpis.',
			content: `Nasz plik z plikami i podpisany cyfrowo jest wysyłany. Każda osoba może zweryfikować, że wiadomość jest  poprawnie zautoryzowana używając klucz publicznego. 
								Po otrzymaniu danych adresat oblicza samodzielnie zahaszowaną wartość otrzymanych danych.  
								Następnym krokiem jest odkodowanie przez odbiorcę zahaszowanych danych znajdujących się w pliku (podpisu cyfrowego) przy pomocy klucza publicznego. Na zakończenie odbywa się porównanie zahaszowanej przez odebiorcę wartości oraz warości otrzymanej co ostatecznie kończy proces autoryzacji. 
								Jeżeli obie porównywane wartości są identyczne  to odbiorca może jednoznacznie stwierdzić, po pierwsze że wiadomość została podpisana przez konkretnego, właściwego nadawce (ponieważ odbiorca był w stanie odkodować te dane przy pomocy klucza publicznego) i po drugie  że dane znajdujące się 
								są na pewno tymi, które odbiorca chciał otrzymać, ponieważ zdekodowane dane są identyczne z zahaszowaną przez odbiorcę wiadomością. `,
			id: '3'
		  },
			{
			title: 'Rozpoznawanie oszustwa przy pomocy podpisu.',
			content: `Najdrobniejsza zmiana danych wewnątrz przesyłanej paczki danych jest odkrywana natychmiast. 
								Na początku odbiorca wiadomości, jak zawsze, stworzy zahaszowaną wartość danych. Następnie odkoduje 
								on samą otrzymaną wiadomość przy użyciu klucza publicznego. W wyniku porównania obydwu wartości odkryte zostanie, że przesyłane dane zostały zmodyfikowane ponieważ obie wartości są różne. `,
			id: '4'
		  },
			{
			title: 'Podsumowanie',
			content: `Rozdział ten przedstawił ideę tego jak blokchain chroni  własność danych na poziomie indywidualnych transakcji, W wyniku przedstawionych tutaj zabiegów transakcje są prawie całkowicie bezpieczne.
							 Jednakże istotne jest również zapewnienie, że cała historia transakcji jest przechowywana również w bezpieczny sposób. `,
			id: '5'
		  },
		];
			
    $scope.title = titleEN;
    $scope.elements = elementsEN;
		$scope.introduction = introductionEN;

  $scope.myCLick = function() {
		   
		}






});
