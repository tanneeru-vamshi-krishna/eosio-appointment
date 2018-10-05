#include <appointment.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/action.hpp>
#include <eosiolib/print.hpp>
#include <string>
#include <iostream>
#include <stdio.h> 
#include <chrono>
#include <ctime>


using namespace std;
using namespace eosio;
using eosio::permission_level;

uint64_t UISappoint::stringToHash(string str){
    std::hash<std::string> str_hash;
    return str_hash(str);
}

void UISappoint::createapp (account_name created_by,
                            uint64_t     created_at,
                            string       aadhaar_str,
                            string       doctor_ID_str,
                            string       hospital_ID_str,
                            string       appointment_ID_str,
                            uint64_t     start_time,
                            uint64_t     end_time,
                            uint64_t     doc_mobile_number,
                            uint64_t     patient_mobile_number,
                            string       doctor_name,
                            string       patient_name){

    require_auth(created_by);

    uint64_t aadhaar        = stringToHash(aadhaar_str);

    uint64_t appointment_ID = stringToHash(appointment_ID_str);

    uint64_t doctor_ID      = stringToHash(doctor_ID_str);
 
    uint64_t hospital_ID    = stringToHash(hospital_ID_str);
 
    hospapp_table uishospapp(_self,_self);
 
    auto itr = uishospapp.find(appointment_ID);
 
    eosio_assert(itr == uishospapp.end(), "appointment already exsits");

    uishospapp.emplace(created_by, [&] (auto& t){
        t.created_by = created_by;
        t.doctor_ID  = doctor_ID;
        t.doctor_ID_str= doctor_ID_str;
        t.appointment_ID_str = appointment_ID_str;
        t.appointment_ID = appointment_ID;
        t.start_time = start_time;
        t.end_time  = end_time;
        t.patient_ID = aadhaar;
        t.patient_ID_str = aadhaar_str;
        t.status=0;
        t.doc_mobile_number = doc_mobile_number;
        t.patient_mobile_number = patient_mobile_number;
        t.doctor_name= doctor_name;
        t.patient_name=patient_name;

    });
    print(appointment_ID,"  appointment is created");    
}          

    
void UISappoint::cancelapp(string appointment_ID_str,
                    account_name cancelled_by,
                    uint64_t cancelled_at){

    require_auth(cancelled_by);

    uint64_t appointment_ID = stringToHash(appointment_ID_str);

    hospapp_table uishospapp(_self,_self);
    
    auto itr = uishospapp.find(appointment_ID);

    eosio_assert(itr != uishospapp.end(), "appointment doesn't exsists");

    uishospapp.modify(itr,cancelled_by,  [&](auto& t){
        t.cancelled_by = cancelled_by;
        t.cancelled_at = cancelled_at;
        t.status=-1;
    });

    print (appointment_ID, "appointment cancelled");
}


void UISappoint::endapp(string appointment_ID_str,
                        account_name completed_by,
                        uint64_t     completed_at){
    require_auth(completed_by);

    uint64_t appointment_ID = stringToHash(appointment_ID_str);

    hospapp_table uishospapp(_self,_self);
    
    auto itr = uishospapp.find(appointment_ID);

    eosio_assert(itr != uishospapp.end(), "appointment doesn't exsists");

    uishospapp.modify(itr,completed_by,  [&](auto& t){
        t.completed_by = completed_by;
        t.completed_at = completed_at;
        t.status=1;
    });

    print(appointment_ID, "appointment completed");

}

