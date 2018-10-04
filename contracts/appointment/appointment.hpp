#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/print.hpp> 
#include <string>
#include <chrono>
#include <ctime>

using namespace eosio;
using namespace std;
using eosio::asset;

class UISappoint:public contract{
    using contract::contract;

    public:

        UISappoint(account_name self) : contract(self){}

        //@abi action
        void createapp( account_name  created_by,
                        uint64_t      created_at, 
                        string        aadhaar_str,
                        string        doctor_ID_str,
                        string        hospital_ID_str,
                        string        appointment_ID_str,
                        uint64_t      start_time,
                        uint64_t      end_time,
                        uint32_t      doc_mobile_number,
                        uint32_t      patient_mobile_number);

        //@abi action
        // std::string getapp (string appointment_ID_str);

        /// @abi action
        void cancelapp( string       appointment_ID_str,
                        account_name cancelled_by,
                        uint64_t     cancelled_at);

       /// @abi action
       void endapp( string appointment_ID_str,
                    account_name terminated_by,
                    uint64_t     terminated_at);



    private:

        //@abi table uishospapp i64
        struct uishospapp{
            account_name created_by;
            uint64_t     created_at;
            uint64_t     doctor_ID;
            string       doctor_ID_str;
            string       appointment_ID_str;
            uint64_t     appointment_ID;
            uint64_t     start_time;
            uint64_t     end_time;
            uint64_t     patient_ID;
            string       patient_ID_str;
            uint8_t      status;                 //   equals 0,1,-1 for in progress, completed and cancelled respectively
            account_name cancelled_by;
            uint64_t     cancelled_at;
            account_name completed_by;
            uint64_t     completed_at;
            uint32_t     doc_mobile_number;
            uint32_t     patient_mobile_number; 

            uint64_t primary_key() const {return appointment_ID;}

            EOSLIB_SERIALIZE(uishospapp, (created_by)(created_at) (doctor_ID)(doctor_ID_str) (appointment_ID_str) (appointment_ID) (start_time) (end_time) (patient_ID) (patient_ID_str) (status)(cancelled_by)(cancelled_at)(completed_by)(completed_at)(doc_mobile_number)(patient_mobile_number))
        };

        typedef eosio::multi_index<N(uishospapp), uishospapp> hospapp_table;

        uint64_t stringToHash(string str);
};

EOSIO_ABI(UISappoint, (createapp) (cancelapp) (endapp))


//  uint64_t oh = 18446744073709551615;
//     uint64_t result = std::chrono::duration_cast<std::chrono::milliseconds> 
//     (m_clock.now().time_since_epoch()).count();