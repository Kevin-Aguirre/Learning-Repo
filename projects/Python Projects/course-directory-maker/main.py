#make code cleaner 
#make a readme.md that shows file structure example, and says this si sailored for students who are not comfortable using the terminal to make directories quickly

import os 

def main():
    semester_name = str(input("Please enter the name of your semester/grade/year:\t"))
    new_semester_dir = os.path.join(os.getcwd(), semester_name)
    os.makedirs(new_semester_dir)
    os.chdir(new_semester_dir)
    print(os.getcwd())


    courses = []
    add_course = str(input("Please enter the name of a course (q to quit):\t"))
    while add_course != "q":
        courses.append(add_course)

        curr_dirr = os.getcwd()
        new_course_dir = os.path.join(curr_dirr, add_course)
        os.makedirs(new_course_dir)

        add_course = str(input("Please enter the name of a course (q to quit):\t"))
    
    for course in courses:
        print(os.getcwd())
        add_subfolders = str(input(f"Would you like to add any folders for this class: {course} (y/n):\t"))
        if add_subfolders == "y":
            os.chdir(course)
            course_subfolder_name = str(input(f"What would you like to put in this {course} folder? (q to quit):\t"))
            while course_subfolder_name != "q":
                os.makedirs(os.path.join(os.getcwd(), course_subfolder_name))
            
                make_iter_folders = str(input(f"Would you like to create various, similar folders based on {course_subfolder_name}? (y/n):\t"))
                if make_iter_folders == "y":
                    os.chdir(course_subfolder_name)
                    iter_folders_count = int(input(f"How many {course_subfolder_name} folders would you like to make: "))
                    for i in range(1, iter_folders_count+1):
                        os.makedirs(os.path.join(os.getcwd(), f"{course_subfolder_name} #{i}"))
                    os.chdir(os.path.dirname(os.getcwd()))

                    
            
                course_subfolder_name = str(input(f"What would you like to put in this {course} folder? (q to quit):\t"))
        os.chdir(os.path.dirname(os.getcwd()))


main()