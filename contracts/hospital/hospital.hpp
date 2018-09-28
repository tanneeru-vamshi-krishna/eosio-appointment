#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/print.hpp>
#include <string>

using namespace std;
using namespace eosio;
using eosio::asset;
using std::string;

class UISHospital:public contract { 
    using contract::contract;
    
    public:

        UISHospital(account_name self) : contract(self){}

        /// @abi action
        void createrole(string       hospital_ID_str,
                        string       role_name,
                        string       role_ID_str,
                        account_name created_by,
                        uint64_t       created_at);

        /// @abi action
        void createhosp(account_name  created_by,
                            uint64_t    created_at,
                            string    hospital_name,
                            string    hospital_ID_str);

        /// @abi action
        void deletehosp(string       hospital_ID_str,
                        account_name deleted_by,
                        uint64_t     deleted_at);

    
    private:

        /// @abi table hosprole i64
        struct hosprole{
            account_name created_by;
            uint64_t     created_at;
            string       role_name;
            string       role_ID_str;
            uint64_t     role_ID;
            uint64_t     hospital_ID;

            uint64_t primary_key() const{return role_ID;}

            EOSLIB_SERIALIZE(hosprole, (created_by)(created_at)(role_name)(role_ID_str)(role_ID)(hospital_ID))
        };

        typedef eosio::multi_index<N(hosprole), hosprole> hosprole_table;
        
        /// @abi table hospital i64
        struct hospital{
            account_name  created_by;
            uint64_t        created_at;
            string        hospital_name;
            string        hospital_ID_str;
            uint64_t      hospital_ID;
            bool          active_status;
            account_name  deleted_by;
            string        deleted_at; 
            
            uint64_t primary_key() const{return hospital_ID;}
            string get_hospital_name() const {return hospital_name; }

            EOSLIB_SERIALIZE(hospital,(created_by)(created_at)(hospital_name)(hospital_ID_str)(hospital_ID)(active_status)(deleted_by)(deleted_at))
        };

        typedef eosio::multi_index<N(hospital), hospital> hospital_table;

        uint64_t stringToHash(string str);
};

EOSIO_ABI(UISHospital,  (createrole) (createhosp) (deletehosp))

