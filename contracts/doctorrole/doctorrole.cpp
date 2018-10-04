#include <doctorrole.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/action.hpp>
#include <eosiolib/print.hpp>
#include <string>
#include <iostream>
#include <stdio.h> 

using namespace std;
using namespace eosio;
using eosio::permission_level;

uint64_t UISdocrole::stringToHash(string str){
    std::hash<std::string> str_hash;
    return str_hash(str);
}

void UISdocrole::adddoctor(account_name created_by,
                       uint64_t created_at,
                       string doctor_ID_str,
                       string aadhaar_str,
                       string doctor_name,
                       string category,
                       uint64_t doc_mobile_number
                       ){

    require_auth(created_by);

    uint64_t doctor_ID = stringToHash(doctor_ID_str);

    uint64_t aadhaar = stringToHash(aadhaar_str);

    uisdoctor_table uisdoctor(_self,_self);

    auto itr = uisdoctor.find(doctor_ID);
 
    eosio_assert(itr == uisdoctor.end(), "doctor already exsits");

    uisdoctor.emplace(created_by, [&] (auto& t){
        
        t.created_by  = created_by;
        t.created_at  = created_at;
        t.doctor_ID   = doctor_ID;
        t.doctor_ID_str = doctor_ID_str;
        t.aadhaar     = aadhaar;
        t.doctor_name = doctor_name;
        t.category    = category;
        t.doc_mobile_number = doc_mobile_number;

    });

    print(doctor_ID, " doctor added");
}

void UISdocrole::addpatient(account_name created_by,
                        uint64_t created_at,
                        string aadhaar_str,
                        uint64_t patient_mobile_number,
                        string patient_name
                        ){

    require_auth(created_by);

    uint64_t aadhaar = stringToHash(aadhaar_str);

    uispatient_table uispatient(_self,_self);

    auto itr = uispatient.find(aadhaar);

    eosio_assert(itr == uispatient.end(), "patient already exsists");

    uispatient.emplace(created_by, [&] (auto& t){
        
        t.created_by = created_by;
        t.created_at = created_at;
        t.aadhaar_str = aadhaar_str;
        t.aadhaar = aadhaar;
        t.patient_mobile_number = patient_mobile_number;
        t.patient_name = patient_name;

    });

    print (aadhaar, "patient added");
}

void UISdocrole::addtimeslot(account_name created_by,
                        uint64_t created_at,
                        uint64_t time_in,
                        uint64_t time_out,
                        string timeslot_ID_str,
                        string doctor_ID_str
                        ){
    
    require_auth(created_by);

    uint64_t timeslot_ID = stringToHash(timeslot_ID_str);

    uint64_t doctor_ID   = stringToHash(doctor_ID_str);

    uistimeslot_table uistimeslot(_self,_self);

    auto itr = uistimeslot.find(timeslot_ID);

    eosio_assert(itr == uistimeslot.end(), "timeslot already exsists");

    uistimeslot.emplace(created_by, [&] (auto& t){

        t.created_by = created_by;
        t.created_at = created_at;
        t.time_in = time_in;
        t.time_out = time_out;
        t.timeslot_ID = timeslot_ID;
        t.timeslot_ID_str = timeslot_ID_str;
        t.doctor_ID = doctor_ID;
        t.doctor_ID_str = doctor_ID_str;

    });

    print (timeslot_ID, "time-slot created");
}

void UISdocrole::assigndoc(account_name created_by,
                           uint64_t  created_at,
                           string doctor_ID_str,
                           string hospital_ID_str,
                           string role_ID_str,
                           string doctor_name,
                           string hospital_name){
    
    require_auth(created_by);

    uint64_t doctor_ID = stringToHash(doctor_ID_str);

    uint64_t hospital_ID = stringToHash(hospital_ID_str);

    uint64_t role_ID = stringToHash(role_ID_str);

    uisdocassign_table  uisdocassign(_self,_self);

    auto itr = uisdocassign.find(doctor_ID);

    eosio_assert(itr== uisdocassign.end(),  "doctor already assigned");

    uisdocassign.emplace(created_by, [&] (auto& t ){
        t.created_by      = created_by;
        t.created_at      = created_at;
        t.doctor_ID       = doctor_ID;
        t.doctor_ID_str   = doctor_ID_str;
        t.hospital_ID     = hospital_ID;
        t.hospital_ID_str = hospital_ID_str;
        t.role_ID         = role_ID;
        t.role_ID_str     = role_ID_str;
        t.doctor_name     = doctor_name;
        t.hospital_name   = hospital_name;

    });

    print(doctor_ID, "doctor assigned");

}

