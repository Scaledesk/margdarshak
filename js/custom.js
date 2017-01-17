/**
 * Created by neerajsingh on 16/12/16.
 */

<script>
$( "div#team1" ).addClass(function( index, currentClass ) {
  var addedClass;
 
  if ( currentClass === "red" ) {
    addedClass = "green";
    $( "p" ).text( "There is one green div" );
  }
 
  return addedClass;
});
</script>