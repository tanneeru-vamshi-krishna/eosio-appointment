#include <hospital.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/action.hpp>
#include <eosiolib/print.hpp>
#include <string>
#include <iostream>
#include <stdio.h> 

using namespace std;
using namespace eosio;
using eosio::permission_level;


uint64_t UISHospital::stringToHash(string str){
    std::hash<std::string> str_hash;
    return str_hash(str);
}

void UISHospital::createrole(string       hospital_ID_str,
                             string       role_name,
                             string       role_ID_str,
                             account_name created_by,
                             uint64_t       created_at){
    require_auth(created_by);

    uint64_t hospital_ID = stringToHash(hospital_ID_str);

    hospital_table hospital(_self,_self);

    auto itr = hospital.find(hospital_ID);

    print( hospital_ID,  "hospital ID");

    eosio_assert(itr == hospital.end(), "No Hospital with given ID to create Role" );

    uint64_t role_ID = stringToHash(role_ID_str);

    hosprole_table hosprole(_self,_self);

    auto hosp_itr = hosprole.find(role_ID);

    eosio_assert(hosp_itr == hosprole.end(), "Role already exsits");

    hosprole.emplace(created_by, [&] (auto& t){
        t.created_by   = created_by;
        t.created_at   = created_at;
        t.role_name    = role_name;
        t.role_ID_str  = role_ID_str;
        t.role_ID      = role_ID;
        t.hospital_ID  = hospital_ID;

    });

    print(role_ID, "role created in given hospital");
} 

void UISHospital::createhosp(account_name created_by,
                            uint64_t        created_at,
                            string        hospital_name,
                            string        hospital_ID_str){
    
    require_auth(created_by);

    uint64_t hospital_ID = stringToHash(hospital_ID_str);

    hospital_table hospital(_self, _self);

    auto itr = hospital.find(hospital_ID);

    eosio_assert(itr == hospital.end(), "Hospital already exists");

    hospital.emplace(created_by, [&](auto& t) {
	    
        t.created_by	     = created_by;
        t.created_at         = created_at;
        t.hospital_name      = hospital_name;
        t.hospital_ID_str    = hospital_ID_str;
        t.hospital_ID        = hospital_ID;
        t.active_status      = true;
    
    });

    print (hospital_ID, " hospital created.");    

}

void UISHospital::deletehosp(string  hospital_ID_str,
                             account_name deleted_by,
                             uint64_t deleted_at){

        
    require_auth(deleted_by);

    uint64_t hospital_ID = stringToHash(hospital_ID_str);

    hospital_table hospital(_self, _self);

    auto itr = hospital.find(hospital_ID);

    eosio_assert(itr != hospital.end(), "No such Hospital  exists");

    hospital.modify(itr,deleted_by, [&]( auto& t) {
	    
        t.deleted_by	     = deleted_by;
        t.deleted_at         = deleted_at;
        t.active_status      = false;
    });

    print (hospital_ID, " hospital deleted.");
                                
}

                               




