#include <iostream>
#include <vector>
#include <fstream>

using namespace std;

class Solution{

private:
    int* record;
    int* maxLength;
    int* startNumber;
    int maxNum;

public:
    Solution(int maxNum){

        this->maxNum = maxNum;

        record = new int[maxNum + 1];
        maxLength = new int[maxNum + 1];
        startNumber = new int[maxNum + 1];
        for(int i = 0 ; i <= maxNum ; i ++) {
            record[i] = 0;
            maxLength[i] = 0;
            startNumber[i] = 0;
        }

        for(int i = 1 ; i <= maxNum ; i ++){
            if(record[i] == 0)
                record[i] = search((long long)i);
            // cout << record[i] << endl;

            if(record[i] >= maxLength[i-1]){
                maxLength[i] = record[i];
                startNumber[i] = i;
            }
            else{
                maxLength[i] = maxLength[i-1];
                startNumber[i] = startNumber[i-1];
            }
        }

    }

    ~Solution(){
        delete[] record;
        delete[] maxLength;
        delete[] startNumber;
    }

    int longestChain(int N){
        return startNumber[N];
    }

private:
    int search(long long num){
        if(num <= (long long)maxNum && record[num] != 0)
            return record[num];

        if(num == (long long)1)
            return 1;

        int res;
        if(num % (long long)2 == (long long)0)
            res = 1 + search(num / (long long)2);
        else
            res = 1 + search((long long)3 * num + (long long)1);

        if(num <= (long long)maxNum)
            record[num] = res;

        return res;
    }
};

int main() {

    int maxN = 5000000;
    Solution solution(maxN);

    int T;
    cin >> T;
    while(T --){
        int N;
        cin >> N;
        cout << solution.longestChain(N) << endl;
    }
    return 0;
}