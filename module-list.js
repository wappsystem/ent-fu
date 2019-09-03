(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"ent-fu-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-ent-fu",
                                                questionnaire_setup:"online-questionnaire-setup-ent-fu",
                                                online_questionnaire:"online-questionnaire-app-ent-fu",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"ent-fu-participant"},

        "online-questionnaire-setup-ent-fu": {url:"$H/m/oq-setup.html",Table:"ent-fu-participant"},
        "online-questionnaire-app-ent-fu":   {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"ent-fu-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"ent-fu-notes"},

        "concom-medication-data-ent-fu":       {url:"$H/m/library/concom-medication-data.html",Table:"concom-medication-ent-fu",form_module:"concom-medication-form-ent-fu",task_name:"Unscheduled - Concomitant Medication"},
        "concom-medication-form-ent-fu":       {url:"$H/m/library/concom-medication-form.html",Table:"concom-medication-ent-fu",task_name:"Unscheduled - Concomitant Medication"},
        "adverse-event-data-ent-fu":           {url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-ent-fu",form_module:"adverse-event-form-ent-fu",task_name:"Unscheduled - Adverse Event"},
        "adverse-event-form-ent-fu":           {url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-ent-fu",task_name:"Unscheduled - Adverse Event"},

        "ess-data-ent-fu":                     {url:"$H/m/library/ess-data.html",Table:"ess-ent-fu",form_module:"ess-form-ent-fu"},
        "ess-form-ent-fu":                     {url:"$H/m/library/ess-form.html",Table:"ess-ent-fu"},
        "fosq30-data-ent-fu":                  {url:"$H/m/library/fosq30-data.html",Table:"fosq30-ent-fu",form_module:"fosq30-form-ent-fu",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ 30)"},
        "fosq30-form-ent-fu":                  {url:"$H/m/library/fosq30-form.html",Table:"fosq30-ent-fu",task_name:"Funtional Outcomes of Sleep Questionnaire (FOSQ 30)"},
        "eq-5d-data-ent-fu":                   {url:"$H/m/library/eq-5d-data.html",Table:"eq-5d-ent-fu",form_module:"eq-5d-form-ent-fu"},
        "eq-5d-form-ent-fu":                   {url:"$H/m/library/eq-5d-form.html",Table:"eq-5d-ent-fu"},
        "glasgow-benefit-inventory-data-ent-fu": {url:"$H/m/library/glasgow-benefit-inventory-data.html",Table:"glasgow-benefit-inventory-ent-fu",form_module:"glasgow-benefit-inventory-form-ent-fu",task_name:"Glasgow Benefit Inventory"},
        "glasgow-benefit-inventory-form-ent-fu": {url:"$H/m/library/glasgow-benefit-inventory-form.html",Table:"glasgow-benefit-inventory-ent-fu",task_name:"Glasgow Benefit Inventory"},
        "snoring-severity-scale-data-ent-fu":  {url:"$H/m/library/snoring-severity-scale-data.html",Table:"snoring-severity-scale-ent-fu",form_module:"snoring-severity-scale-form-ent-fu",task_name:"The Snoring Severity Scale"},
        "snoring-severity-scale-form-ent-fu":  {url:"$H/m/library/snoring-severity-scale-form.html",Table:"snoring-severity-scale-ent-fu",task_name:"The Snoring Severity Scale"},
        "study-completion-data-data-ent-fu":               {url:"$H/m/library/study-completion-data-data.html",Table:"study-completion-data-ent-fu",form_module:"study-completion-data-form-ent-fu"},
        "study-completion-data-form-ent-fu":               {url:"$H/m/library/study-completion-data-form.html",Table:"study-completion-data-ent-fu"},
        "sleep-physician-review-data-ent-fu":         {url:"$H/m/library/sleep-physician-review-data.html",Table:"sleep-physician-review-ent-fu",form_module:"sleep-physician-review-form-ent-fu"},
        "sleep-physician-review-form-ent-fu":         {url:"$H/m/library/sleep-physician-review-form.html",Table:"sleep-physician-review-ent-fu"},
        "phone-call-data-ent-fu":                      {url:"$H/m/library/phone-call-data.html",Table:"phone-call-ent-fu",form_module:"phone-call-form-ent-fu"},
        "phone-call-form-ent-fu":                      {url:"$H/m/library/phone-call-form.html",Table:"phone-call-ent-fu"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
})();
