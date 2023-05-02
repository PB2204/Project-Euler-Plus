#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1000000007;

vector<int> coins = { 1, 2, 5, 10, 20, 50, 100, 200 };

int main() 
{            
    long long DP[100010] = {0};
    DP[0] = 1;            
        
    for(int i=0; i<8; i++)
    {
        for(int j = coins[i]; j <= 100000; j++)
        {
            DP[j] = (DP[j] + DP[j - coins[i]]) % MOD;
        }
    }    
            
    int t;
    cin >> t;
           
    while(t--)
    {
        int n;
        cin >> n;        

        cout << DP[n] % MOD << endl;     
    }
}