---
marp: true
theme: microblink
paginate: false
---

<!-- _class: title -->

# Presentation title

FirstName LastName, Title @ Microblink

@slackHandle at cpplang.slack.com
e-mail@microblink.com

---

<!-- _class: quote-large -->

Quote source:
> This is a very important quote.

---

<!-- _class: quote-large -->

Quote source:
> This is a very important quote that spans in multiple lines and is too long to fit in a single line. Therefore, it's important to look well and professional, even though it make take more than two lines.

---

# Slide title

- a bullet
- another bullet
    - indented bullet
    - another indented bullet
        - even more indented bullet
- main-level bullet
- a bullet with [a link](www.microblink.com)

---

## Slide subtitle

- a bullet mentioning code, such as `std::vector< std::string >::iterator`
- a c++ code example:

```c++
#include <boost/outcome.hpp>
#include <exception>

template< typename Outcome >
auto succeedOrDie( Outcome && outcome ) {
    if ( outcome.has_value() ) {
        return std::forward< Outcome >( outcome ).value();
    } else {
        std::terminate();
    }
}
```

---

<!-- _class: quote-large -->

```c++
struct ABox
{
    int  x        = 0;
    int  y        = 0;
    int  width    = 0;
    int  height   = 0;
};
```

---

<!-- _class: quote-large -->

# Big demo slide

## https://github.com/zagreb-cpp-user-group/meetup-2019-11-28

---

# Some python code

```python
from conans import ConanFile, CMake, tools

class FacecameraConan(ConanFile):
    name = "face-camera"
    version = "0.1.0"
    license = "<Put the package license here>"
    author = "<Put your name here> <And your email here>"
    url = "<Package recipe repository url here, for issues about the package>"
    description = "<Description of Facecamera here>"
    topics = ("<Put some tag here>", "<here>", "<and here>")
    settings = "os", "compiler", "build_type", "arch"
    options = {"shared": [True, False]}
    default_options = {"shared": False}
    generators = "cmake"
```

---

# Some JS code

```js
var faceDetector = new Module.FaceDetector();
var detectionResult = faceDetector.detectFaces( image );

// free the memory
faceDetector.delete();
```

---

### Sub-Subtitle slide with C++ code and comments

```c++
#include <string_view>

std::string_view s;     // pset(s) = {null}
{
    char a[100];
    s=a;                // pset(s) = {a}
    std::cout << s[0];  // ok
}                       // x destroyed  set pset(s) = {invalid}
std::cout << s[0];      // error: ‘s[0]’ is illegal, s was invalidated
                        // when ‘a’ went out of scope on line C (path: A→C→D)
```

[Godbolt link](https://godbolt.org/z/3vgrnq)

---

<!-- _class: quote-large -->

# Thank you
