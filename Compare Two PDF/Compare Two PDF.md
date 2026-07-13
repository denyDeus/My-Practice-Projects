**Check if two PDF documents are identical with Python**



**Modules used:**

* **difflib :** It is a module that contains function that allows to compare set of data.
* **SequenceMatcher :** It is used to compare pair of input sequences.



**Function Used:**

* **hash\_file ( string $algo , string $filename , bool $binary = false ):** It is a function which has the hash of a file.
* **object.hexdigest():** It is a function which returns string.
* **fileObject.read(size):** It is a function that returns the specified number of bytes of a file.



**Approach**

* Import module
* Declare a function with 2 arguments which is for file.
* Declare two objects for hashlib.sha1()
* Open files
* Read the file by breaking the line into smaller chunks
* Now return both file such as h1.hexdigest() which is of 160 bits.
* Use hash\_file() function to store the hash of a file.
* Compare and generate appropriate message

