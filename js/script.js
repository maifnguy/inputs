$('#checkbox').on('change', function() {
  if($(this).is(':checked')) {
    $('#checkboxVal').text('true');
  } else {
    $('#checkboxVal').text('false');
  }
});

$('#color').on('change',function(){
	$('#colorVal').text($(this).val());
});

$('#date').on('change',function(){
	$('#dateVal').text($(this).val());
});

$('#datetime').on('change',function(){
	$('#datetimeVal').text($(this).val());
});

$('#email').on('input', function() {
  $('#emailVal').text($(this).val());
});

$('#month').on('change',function(){
	$('#monthVal').text($(this).val());
});

$('#number').on('input', function() {
  $('#numberVal').text($(this).val());
});

$('#password').on('input', function() {
  $('#passwordVal').text($(this).val());
});

$('.radio').on('change',function(){
	$('#radioVal').text($(this).val());
});

$('#range').on('change',function(){
	$('#rangeVal').text($(this).val());
});

$('#search').on('input', function() {
  $('#searchVal').text($(this).val());
});

$('#select').on('change',function(){
	$('#selectVal').text($(this).val());
});

$('#selectm').on('change',function(){
	$('#selectmVal').text($(this).val());
});

$('#tel').on('input', function() {
  $('#telVal').text($(this).val());
});

$('#text').on('input', function() {
  $('#textVal').text($(this).val());
});

$('#textarea').on('input', function() {
  $('#textareaVal').text($(this).val());
});

$('#time').on('change', function() {
  $('#timeVal').text($(this).val());
});

$('#url').on('input', function() {
  $('#urlVal').text($(this).val());
});

$('#week').on('change', function() {
  $('#weekVal').text($(this).val());
});
  


