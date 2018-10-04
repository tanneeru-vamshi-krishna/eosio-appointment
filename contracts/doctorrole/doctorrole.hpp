#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/print.hpp>
#include <string>

using namespace eosio;
using namespace std;
using eosio::asset;

class UISdocrole: public contract{
    using contract::contract;

    public:

        UISdocrole(account_name self):contract(self) {}
       
        /// @abi action
        void adddoctor(account_name created_by,
                       uint64_t created_at,
                       string doctor_ID_str,
                       string aadhaar_str,
                       string doctor_name,
                       string category,
                       uint64_t doc_mobile_number
                       );
        
        /// @abi action
        void addpatient(account_name created_by,
                        uint64_t created_at,
                        string aadhaar_str,
                        uint64_t mobile_number,
                        string patient_name
                        );

        /// @abi action
        void addtimeslot(account_name created_by,
                        uint64_t created_at,
                        uint64_t time_in,
                        uint64_t time_out,
                        string timeslot_ID_str,
                        string doctor_ID_str
                        );

        /// @abi action
        void assigndoc(account_name created_by,
                       uint64_t created_at,
                       string doctor_ID_str,
                       string hospital_ID_str,
                       string role_ID_str,
                       string doctor_name,
                       string hospital_name);               


    private:

        //@abi table UIStimeslot i64
        struct uistimeslot{
            account_name created_by;
            string       created_at;
            uint64_t     time_in;
            uint64_t     time_out;
            uint64_t     timeslot_ID;
            string       timeslot_ID_str;
            uint64_t     doctor_ID;
            string       doctor_ID_str;

            uint64_t primary_key() const{return timeslot_ID;}

            EOSLIB_SERIALIZE(uistimeslot, (created_by) (created_at) (time_in) (time_out) (timeslot_ID) (timeslot_ID_str) (doctor_ID) (doctor_ID_str))  
        };

         typedef eosio::multi_index<N(uistimeslot), uistimeslot> uistimeslot_table;


        //@abi table uisdoctor i64
        struct uisdoctor{
            account_name created_by;
            string       created_at;
            string       doctor_ID_str;
            uint64_t     doctor_ID;
            string       aadhaar_str;
            uint64_t     aadhaar;
            string       category;
            string       doctor_name;
            uint64_t     timeslot_ID;
            string       timeslot_ID_str;
            uint64_t     doc_mobile_number;

            uint64_t primary_key() const{return doctor_ID;}

            uint64_t secondary_key() const {return aadhaar;}

            uint64_t by_mobile_number() const {return doc_mobile_number;}
            
            EOSLIB_SERIALIZE(uisdoctor, (created_by) (created_at) (doctor_ID_str)(doctor_ID)(aadhaar_str)(aadhaar)(category)(doctor_name)(timeslot_ID)(timeslot_ID_str)(doc_mobile_number))
        };

        // typedef eosio::multi_index<N(uisdoctor), uisdoctor> uisdoctor_table;

        typedef eosio::multi_index<N(uisdoctor), uisdoctor, indexed_by<N(aadhaar), const_mem_fun<uisdoctor, uint64_t, &uisdoctor::secondary_key>>,  indexed_by<N(doc_mobile_number), const_mem_fun<uisdoctor, uint64_t, &uisdoctor::by_mobile_number>>> uisdoctor_table;

        //@abi table uisdocassign i64
        struct uisdocassign{
            account_name created_by;
            string       created_at;
            uint64_t      doctor_ID;
            string       doctor_ID_str;
            string       doctor_name;
            uint64_t     hospital_ID;
            string       hospital_ID_str;
            string       hospital_name;
            uint64_t     role_ID;
            string       role_ID_str;

            uint64_t primary_key() const{return doctor_ID;}

            EOSLIB_SERIALIZE(uisdocassign, (created_by) (created_at) (doctor_ID)(doctor_ID_str) (doctor_name) (hospital_ID) (hospital_ID_str) (hospital_name) (role_ID)(role_ID_str))     

        };

        typedef eosio::multi_index<N(uisdocassign), uisdocassign> uisdocassign_table;

        //@abi table uispatient i64 
        struct uispatient{
            account_name created_by;
            string       created_at;
            string       aadhaar_str;
            uint64_t     aadhaar;
            string       patient_name;
            uint64_t     patient_ID;
            string       patient_ID_str;
            uint64_t     patient_mobile_number;

            uint64_t primary_key() const {return patient_ID;}

            uint64_t secondary_key() const{ return aadhaar;}

            uint64_t by_mobile_number() const {return patient_mobile_number;}

            EOSLIB_SERIALIZE(uispatient,(created_by) (created_at) (aadhaar_str) (aadhaar) (patient_name)(patient_ID)(patient_ID_str) (patient_mobile_number))
        };

        // typedef eosio::multi_index<N(uispatient), uispatient> uispatient_table;
        typedef eosio::multi_index<N(uispatient), uispatient, indexed_by<N(aadhaar), const_mem_fun<uispatient, uint64_t, &uispatient::secondary_key>>, indexed_by<N(patient_mobile_number), const_mem_fun<uispatient, uint64_t, &uispatient::by_mobile_number>>> uispatient_table;

        uint64_t stringToHash(string str);

};

EOSIO_ABI(UISdocrole, (adddoctor)(addpatient)(addtimeslot)(assigndoc))