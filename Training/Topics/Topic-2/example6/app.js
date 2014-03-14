function AppViewModel() {
    this.staticData = [
        {
            courseIcon:"A",
            courseName:"Android Basics",
            courseDescription:"Teaches Hello World Application in Android"
        },
        {
            courseIcon:"i",
            courseName:"iOS Basics",
            courseDescription:"Teaches Hello World Application in iOS"

        },
        {
            courseIcon:"H",
            courseName:"HTML5 Basics",
            courseDescription:"Teaches HTML5 Fundamentals"
        },
        {
            courseIcon:"C",
            courseName:"CSS 3 Basics",
            courseDescription:"Teaches CSS3 Fundamentals"
        },
        {
            courseIcon:"M",
            courseName:"MongoDB Basics",
            courseDescription:"MongoDB Primer"
        }
    ];

    this.strTrContain  = '<tr class="course">';
    this.strTrContain +=     '<td><div class="clogo"></div></td>';
    this.strTrContain +=     '<td><div class="name" ></div></td>';
    this.strTrContain +=     '<td><div class="description" ></div></td>';
    this.strTrContain +=     '<td><button class="del">X</button></td>';
    this.strTrContain += '</tr>';

    this.fillStaticData= function(){
                            var self = this;
                            $.each(this.staticData,function(index,value){
                                self.addNewRow(value['courseIcon'],value['courseName'],value['courseDescription']);
                            });
                        }

    this.addNewData= function(){
                        this.addNewRow($('#newIcon').val(),$('#newName').val(),$('#newDescription').val())
                        $('#newIcon').val('');
                        $('#newName').val('');
                        $('#newDescription').val('');
                     }

    this.addNewRow =    function(icon,name,description){
                            var trContain = $(this.strTrContain);
                            trContain.find('div.clogo').html(icon);
                            trContain.find('div.name').html(name);
                            trContain.find('div.description').html(description);

                            //adding on click event to button.
                            (trContain.find('button.del')).on('click',function(){
                                $(this).parent().parent().remove();
                            });

                            $('#myTable tbody').append(trContain.clone(true));
                        }
}
