// PART 1: Display input value  ----------------------------------------//
  
  // object and function for inputs on .change() event
  var onChange = {'#color':'#colorVal', '#date':'#dateVal', '#datetime':'#datetimeVal', '#month':'#monthVal', '.radio':'#radioVal', '#range':'#rangeVal', '#select':'#selectVal', '#selectm':'#selectmVal', '#time':'#timeVal', '#week':'#weekVal'};

  $.each( onChange, function( i, val ) {
    $(i).on('change',function(){
      $(val).text($(this).val());
    });
  });


  // object and function for inputs on .input() event
  var onInput = {'#email':'#emailVal', '#number':'#numberVal', '#password':'#passwordVal', '#search':'#searchVal', '#tel':'#telVal', '#text':'#textVal', '#textarea':'#textareaVal', '#url':'#urlVal',}

  $.each( onInput, function( i, val ) {
    $(i).on('input',function(){
      $(val).text($(this).val());
    });
  });


  // displays 'true' or 'false' when clicking/unclicking checkbox 
  $('#checkbox').on('change', function() {
    if($(this).is(':checked')) {
      $('#checkboxVal').text('true');
    } else {
      $('#checkboxVal').text('false');
    }
  });



// PART 2: Mirror Input--------------------------------------------------//
  
  // Mirror for .change() events
  $.each( onChange, function( i, val ) {
    $(i).change('keypress keyup blur', function() {
    $(i + '2').val($(this).val());
    });
  });
  

  // Mirror for .input() events
  $.each( onInput, function( i, val ) {
     $(i).bind('keypress keyup blur', function() {
    $(i + '2').val($(this).val());
    });
  });


  // Mirror for checkbox
  $('#checkbox').on('change', function() {
    if($(this).is(':checked')) {
      $('#checkbox2').prop('checked', $(this).prop('checked'));
     } else {
      $('#checkbox2').prop('checked', false);
     };
  });


  // Mirror for radio
  var radio = ['#first', '#second', '#third']
  $.each( radio, function(i, val) {            
    $(val).on('change', function() {
      if($(this).is(':checked')) {
      $(val + '2').prop("checked", true); 
      };
    });
  });




// Practice Code  -------------------------------------------------------//

  //$('#color').on('change',function(){
  //	$('#colorVal').text($(this).val());
  //});

  //$('#date').on('change',function(){
  //	$('#dateVal').text($(this).val());
  //});

  //$('#datetime').on('change',function(){
  //	$('#datetimeVal').text($(this).val());
  //});
  //
  //$('#email').on('input', function() {
  //  $('#emailVal').text($(this).val());
  //});
  //
  //$('#month').on('change',function(){
  //	$('#monthVal').text($(this).val());
  //});
  //
  //$('#number').on('input', function() {
  //  $('#numberVal').text($(this).val());
  //});

  //$('#password').on('input', function() {
  //  $('#passwordVal').text($(this).val());
  //});

  //$('.radio').on('change',function(){
  //	$('#radioVal').text($(this).val());
  //});

  //$('#range').on('change',function(){
  //	$('#rangeVal').text($(this).val());
  //});

  //$('#search').on('input', function() {
  //  $('#searchVal').text($(this).val());
  //});

  //$('#select').on('change',function(){
  //	$('#selectVal').text($(this).val());
  //});

  //$('#selectm').on('change',function(){
  //	$('#selectmVal').text($(this).val());
  //});

  //$('#tel').on('input', function() {
  //  $('#telVal').text($(this).val());
  //});

  //$('#text').on('input', function() {
  //  $('#textVal').text($(this).val());
  //});

  //$('#textarea').on('input', function() {
  //  $('#textareaVal').text($(this).val());
  //});

  //$('#time').on('change', function() {
  //  $('#timeVal').text($(this).val());
  //});

  //$('#url').on('input', function() {
  //  $('#urlVal').text($(this).val());
  //});

  //$('#week').on('change', function() {
  //  $('#weekVal').text($(this).val());
  //});
  //  
