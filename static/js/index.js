// 字数カウント 
// inc_lf: カウントに改行文字を含めるか
// inc_space: カウントにスペースを含めるか
function char_count(inc_lf,inc_space){
  textarea = document.querySelector('#textarea');
  sentences = textarea.value;
  sentences = sentences.replace(/[a-z,A-Z]+/g,'\*');
  if (!inc_space) {
    sentences = sentences.replace(/ +/g,'');
  }
  if (!inc_lf) {
    sentences = sentences.replace(/\n+/g,'');
  }
  return sentences.length;
}

function onChangeText(paper_flag){
  document.querySelector('#raw_count').value = document.querySelector('#textarea').value.length;
  document.querySelector('#word_count').value = char_count(true,true);
  document.querySelector('#ns_count').value = char_count(true,false);
  document.querySelector('#nr_count').value = char_count(false,true);
  document.querySelector('#nsr_count').value = char_count(false,false);
  if(paper_flag){
    document.querySelector('#textarea').value = document.querySelector('#textarea').value.replace(/-?\n/g,'');
    navigator.clipboard.writeText(document.querySelector('#textarea').value).then(
      e => console.log(document.querySelector('#textarea').value),
    );
  }

}

function clearTextArea(){
  console.log('DEBUG');
  document.querySelector('#textarea').value = '';
  onChangeText(false);
}
