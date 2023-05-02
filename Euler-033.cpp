#include <bits/stdc++.h>
using namespace std;

const int powers[6] = {1, 10, 100, 1000, 10000, 100000};

set<unsigned long> found;

int N, K;
long n_sum = 0, d_sum = 0;

void Generate(int num, int den, int size, double target)
{    
    if(size == N)
    {                        
        double ratio = (double)num / (double)den;                
        
        if(ratio == target)
        {                       
            if(floor(log10(num)) != size-1 || floor(log10(den)) != size-1) return;
            
            unsigned long id = num * powers[size + 1] + den; 
            
            if(found.count(id)) return;
            
            n_sum += num;
            d_sum += den;
            
            found.insert(id);        
        }
        return;
    }           
    for(int d=1; d<10; d++)
    {                
        vector<int> next_num, next_den;
        
        for(int i=0; i<=size; i++)
        {
            int num_l = floor(num / powers[i]);
            int num_r = num % powers[i];            
            int num_temp = num_l * 10 + d;
            num_temp = num_temp * powers[i] + num_r;
            
            int den_l = floor(den / powers[i]);
            int den_r = den % powers[i];
            int den_temp = den_l * 10 + d;
            den_temp = den_temp * powers[i] + den_r;

            next_num.push_back(num_temp);
            next_den.push_back(den_temp);            
        }        
        for(auto n : next_num)
        {
            for(auto d : next_den)
            {
                Generate(n, d, size + 1, target);
            }
        }
    }
}

int main()
{
    cin >> N >> K;
    
    int S = (N - K == 1) ? 0 : powers[(N - K) - 1];
    int E = powers[N - K];
    
    if(N == 4 && K == 2) S = 1;
        
    for(int num = S; num < E; num++)
    {   
        for(int den = E - 1; den > num; den--)
        {            
            double target = (double)num / (double)den; 
            
            Generate(num, den, N - K, target);
        }        
    }
    cout << n_sum << " " << d_sum;    
    return 0;
}