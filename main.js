var app = new Vue ({
  el: '#app',
  data:{
    nameStart:'الجيل الصاعد',
    aayaStart: 'وَجَعَلْنَا مِنْهُمْ أَئِمَّةً يَهْدُونَ بِأَمْرِنَا لَمَّا صَبَرُوا۟ وَكَانُوا۟ بِـَٔايَٰتِنَا يُوقِنُونَ',
         }
})
function timer() {
  document.querySelector("#app").style.display="none";
  document.querySelector("#list").style.display="block";
}
var arabic = new Vue ({
  el: '#list',
  data:{
    list: ['اللُّغة العربيَّة','علوم القرآن','علم الحديث','دراسة السيرة','علم التَّاريخ','علم العقيدة']
         }
})
