import os 

def main():
    courses = []
    add_course = str(input("Please enter the name of a course (q to quit):\t"))
    while add_course != "q":
        courses.append(add_course)

        curr_dirr = os.getcwd()
        new_course_dir = os.path.join(curr_dirr, add_course)
        os.makedirs(new_course_dir)

        add_course = str(input("Please enter the name of a course (q to quit):\t"))


main()